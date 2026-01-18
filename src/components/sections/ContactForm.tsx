import { useState, useEffect } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  validateContactForm,
  sendContactMessage,
  ContactServiceError,
  type ContactFormData,
} from "@/api/services/contactService";

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form and update button state
  useEffect(() => {
    const validationErrors = validateContactForm(formData);
    const hasNoErrors = Object.keys(validationErrors).length === 0;
    const hasAllFields =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "";

    setIsFormValid(hasNoErrors && hasAllFields);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate single field on blur
    const validationErrors = validateContactForm(formData);
    if (validationErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Validate form
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await sendContactMessage(formData);

      if (response.success) {
        // Reset form on success
        setFormData({ name: "", email: "", message: "" });
        setTouched({});
        onSuccess?.();
      }
    } catch (error) {
      let errorMessage = "Failed to send message. Please try again.";

      if (error instanceof ContactServiceError) {
        errorMessage = error.message;
      }

      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="space-y-6">

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium"
            >
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              className={`transition-all h-11 ${
                touched.name && errors.name
                  ? "border-destructive focus-visible:ring-destructive"
                  : "border-input focus-visible:ring-ring"
              } bg-background text-foreground placeholder:text-muted-foreground`}
              disabled={isSubmitting}
              aria-invalid={touched.name && !!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {touched.name && errors.name && (
              <p
                id="name-error"
                className="text-sm text-destructive flex items-center gap-1"
              >
                <span className="font-medium">⚠</span> {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={`transition-all h-11 ${
                touched.email && errors.email
                  ? "border-destructive focus-visible:ring-destructive"
                  : "border-input focus-visible:ring-ring"
              } bg-background text-foreground placeholder:text-muted-foreground`}
              disabled={isSubmitting}
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <p
                id="email-error"
                className="text-sm text-destructive flex items-center gap-1"
              >
                <span className="font-medium">⚠</span> {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium"
            >
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write a message..."
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur("message")}
              rows={6}
              className={`transition-all resize-none ${
                touched.message && errors.message
                  ? "border-destructive focus-visible:ring-destructive"
                  : "border-input focus-visible:ring-ring"
              } bg-background text-foreground placeholder:text-muted-foreground`}
              disabled={isSubmitting}
              aria-invalid={touched.message && !!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {touched.message && errors.message && (
              <p
                id="message-error"
                className="text-sm text-destructive flex items-center gap-1"
              >
                <span className="font-medium">⚠</span> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full text-base font-medium h-12 transition-all cursor-pointer"
            disabled={!isFormValid || isSubmitting}
            
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
