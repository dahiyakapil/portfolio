/**
 * Contact Service
 * Handles API communication for the contact form
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

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
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'ContactServiceError';
  }
}

/**
 * Sends a contact form submission to the API
 * @param formData - The contact form data
 * @returns Promise with the API response
 * @throws ContactServiceError if the request fails
 */
export const sendContactMessage = async (
  formData: ContactFormData
): Promise<ContactResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Parse the response
    const data = await response.json();

    // Handle non-OK responses
    if (!response.ok) {
      throw new ContactServiceError(
        data.message || 'Failed to send message',
        response.status
      );
    }

    return data;
  } catch (error) {
    // Handle network errors or other fetch failures
    if (error instanceof ContactServiceError) {
      throw error;
    }

    // Handle network errors
    if (error instanceof TypeError) {
      throw new ContactServiceError(
        'Network error. Please check your connection and try again.',
        undefined,
        error
      );
    }

    // Handle unexpected errors
    throw new ContactServiceError(
      'An unexpected error occurred. Please try again later.',
      undefined,
      error
    );
  }
};

/**
 * Validates email format
 * @param email - Email to validate
 * @returns true if valid, false otherwise
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates the entire contact form
 * @param formData - Form data to validate
 * @returns Object with validation errors (empty if valid)
 */
export const validateContactForm = (formData: ContactFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};
