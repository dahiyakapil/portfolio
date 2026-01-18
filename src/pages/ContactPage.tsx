import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { ContactForm } from '@/components/sections/ContactForm';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const handleSuccess = () => {
    toast.success('Message sent successfully!', {
      description: "I'll get back to you within 24 hours.",
      duration: 5000,
    });
  };

  const handleError = (errorMessage: string) => {
    toast.error('Failed to send message', {
      description: errorMessage,
      duration: 6000,
    });
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="w-full max-w-2xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Back Button */}
          <Link to="/">
            <Button
              variant="ghost"
              className="group -ml-2 hover:bg-accent/50 transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-4"
            >
             
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 mt-10">
                  Contact
                </h1>
                <p className="text-muted-foreground text-base md:text-lg">
                  Get in touch with me. I will get back to you as soon as possible.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm onSuccess={handleSuccess} onError={handleError} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
