import { SOCIAL_LINKS } from "@/constants/portfolio-data";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(
  /\/$/,
  ""
);

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
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

/**
 * Sends a contact form submission to the API.
 * Falls back to mailto when VITE_API_BASE_URL is missing.
 */
export const sendContactMessage = async (
  formData: ContactFormData
): Promise<ContactResponse> => {
  if (!API_BASE_URL) {
    openMailtoFallback(formData);
    return {
      success: true,
      message: "Opened your email client to send the message.",
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
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    const raw = await response.text();
    let data: Partial<ContactResponse> = {};
    try {
      data = raw ? (JSON.parse(raw) as ContactResponse) : {};
    } catch {
      // Non-JSON (e.g. Render cold-start HTML) — treat as failure below
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
      throw error;
    }

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new ContactServiceError(
        "The server is taking too long to respond (it may be waking up). Please try again in a moment, or email me directly.",
        408,
        error
      );
    }

    if (error instanceof TypeError) {
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
