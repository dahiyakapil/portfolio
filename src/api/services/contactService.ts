import { SOCIAL_LINKS } from "@/constants/portfolio-data";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(
  /\/$/,
  ""
);

/** Minimum time (ms) a human needs to fill the form — bots often submit instantly. */
const MIN_SUBMIT_MS = 2500;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  /** Honeypot — must stay empty */
  website?: string;
  /** Epoch ms when the form was opened */
  formOpenedAt?: number;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  usedMailto?: boolean;
}

export class ContactServiceError extends Error {
  statusCode?: number;
  originalError?: unknown;

  constructor(
    message: string,
    statusCode?: number,
    originalError?: unknown
  ) {
    super(message);
    this.name = "ContactServiceError";
    this.statusCode = statusCode;
    this.originalError = originalError;
  }
}

export function isContactApiConfigured(): boolean {
  return Boolean(API_BASE_URL);
}

function buildMailtoHref(formData: ContactFormData): string {
  const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  );
  return `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
}

/**
 * Opens the user's mail client as a reliable fallback when the API is down.
 */
export function openMailtoFallback(formData: ContactFormData): void {
  window.location.href = buildMailtoHref(formData);
}

function assertNotSpam(formData: ContactFormData): void {
  if (formData.website && formData.website.trim() !== "") {
    throw new ContactServiceError("Unable to send message.", 400);
  }

  const openedAt = formData.formOpenedAt ?? 0;
  if (openedAt > 0 && Date.now() - openedAt < MIN_SUBMIT_MS) {
    throw new ContactServiceError(
      "Please take a moment to review your message, then try again.",
      429
    );
  }
}

/**
 * Sends a contact form submission to the API.
 * Falls back to mailto when VITE_API_BASE_URL is missing or the request fails hard.
 */
export const sendContactMessage = async (
  formData: ContactFormData,
  options?: { fallbackToMailto?: boolean }
): Promise<ContactResponse> => {
  assertNotSpam(formData);

  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
    // Opaque anti-spam fields — backend may ignore; still useful client-side
    _hp: formData.website ?? "",
    _t: formData.formOpenedAt ?? Date.now(),
  };

  if (!API_BASE_URL) {
    if (import.meta.env.PROD) {
      console.warn(
        "[contact] VITE_API_BASE_URL is not set — using mailto fallback."
      );
    }
    openMailtoFallback(formData);
    return {
      success: true,
      message: "Opened your email client to send the message.",
      usedMailto: true,
    };
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 45000);

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const raw = await response.text();
    let data: Partial<ContactResponse> = {};
    try {
      data = raw ? (JSON.parse(raw) as ContactResponse) : {};
    } catch {
      // Non-JSON (e.g. Render cold-start HTML)
    }

    if (!response.ok) {
      throw new ContactServiceError(
        data.message || "Failed to send message. Please try again.",
        response.status
      );
    }

    return {
      success: true,
      message: data.message || "Message sent successfully",
    };
  } catch (error) {
    if (error instanceof ContactServiceError) {
      if (options?.fallbackToMailto && error.statusCode !== 429) {
        openMailtoFallback(formData);
        return {
          success: true,
          message: "Opened your email client to send the message.",
          usedMailto: true,
        };
      }
      throw error;
    }

    if (error instanceof DOMException && error.name === "AbortError") {
      if (options?.fallbackToMailto) {
        openMailtoFallback(formData);
        return {
          success: true,
          message:
            "The server was slow to respond, so I opened your email client instead.",
          usedMailto: true,
        };
      }
      throw new ContactServiceError(
        "The server is taking too long to respond (it may be waking up). Please try again in a moment, or email me directly.",
        408,
        error
      );
    }

    if (error instanceof TypeError) {
      if (options?.fallbackToMailto) {
        openMailtoFallback(formData);
        return {
          success: true,
          message:
            "Could not reach the server, so I opened your email client instead.",
          usedMailto: true,
        };
      }
      throw new ContactServiceError(
        "Could not reach the contact server. Please try again or email me directly.",
        undefined,
        error
      );
    }

    throw new ContactServiceError(
      "An unexpected error occurred. Please try again or email me directly.",
      undefined,
      error
    );
  } finally {
    window.clearTimeout(timeoutId);
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (
  formData: ContactFormData
): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};
