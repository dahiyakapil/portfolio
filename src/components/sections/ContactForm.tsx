import { useState, useEffect, useRef } from "react";
import { Loader2, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SOCIAL_LINKS } from "@/constants/portfolio-data";
import { trackEvent } from "@/lib/analytics";
import {
  validateContactForm,
  sendContactMessage,
  openMailtoFallback,
  isContactApiConfigured,
  ContactServiceError,
  type ContactFormData,
} from "@/api/services/contactService";

interface ContactFormProps {
  onSuccess?: (meta?: { usedMailto?: boolean }) => void;
  onError?: (error: string) => void;
}

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const openedAtRef = useRef(Date.now());
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    website: "",
    formOpenedAt: openedAtRef.current,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isFormValid, setIsFormValid] = useState(false);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateContactForm(formData);
    if (validationErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await sendContactMessage(
        {
          ...formData,
          formOpenedAt: openedAtRef.current,
        },
        { fallbackToMailto: true }
      );
      if (response.success) {
        trackEvent("Contact Submit", {
          method: response.usedMailto ? "mailto" : "api",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          website: "",
          formOpenedAt: Date.now(),
        });
        openedAtRef.current = Date.now();
        setTouched({});
        onSuccess?.({ usedMailto: response.usedMailto });
      }
    } catch (error) {
      let errorMessage = "Failed to send message. Please try again.";
      if (error instanceof ContactServiceError) {
        errorMessage = error.message;
      }
      trackEvent("Contact Error");
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-8">
      {!isContactApiConfigured() && import.meta.env.DEV ? (
        <p className="mb-4 text-xs text-amber-500/90">
          Dev note: `VITE_API_BASE_URL` is unset — submits will use mailto.
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Honeypot — hidden from users, filled by many bots */}
        <div
          className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
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
            <p id="name-error" className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
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
            <p id="email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
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
            <p id="message-error" className="text-sm text-destructive">
              {errors.message}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Button
            type="submit"
            size="lg"
            className="w-full text-base font-medium h-12"
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

          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full gap-2 h-11"
            disabled={!isFormValid || isSubmitting}
            onClick={() => {
              trackEvent("Contact Mailto Fallback", { source: "button" });
              openMailtoFallback(formData);
            }}
          >
            <Mail className="h-4 w-4" />
            Or email {SOCIAL_LINKS.email}
          </Button>
        </div>
      </form>
    </div>
  );
}
