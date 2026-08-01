import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const handleSuccess = (meta?: { usedMailto?: boolean }) => {
    if (meta?.usedMailto) {
      toast.message("Email client opened", {
        description:
          "Finish sending from your mail app — or try the form again in a moment if the server was waking up.",
        duration: 6000,
      });
      return;
    }
    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as I can.",
      duration: 5000,
    });
  };

  const handleError = (errorMessage: string) => {
    toast.error("Failed to send message", {
      description: errorMessage,
      duration: 6000,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link to="/">
          <Button
            variant="ghost"
            className="group -ml-2 hover:bg-accent/50 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 mt-6">
            Contact
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Get in touch with me. I will get back to you as soon as possible.
          </p>
        </div>

        <ContactForm onSuccess={handleSuccess} onError={handleError} />
      </div>
    </div>
  );
}
