import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl text-black dark:text-white md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-black dark:text-white mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl text-primary font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Email</h4>
                  <a
                    href="mailto:mkamalfilli@gmail.com"
                    className="text-black dark:text-white hover:text-primary transition-colors"
                  >
                    mkamalfilli@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Phone</h4>
                  <a
                    href="tel:+251939001695"
                    className="text-black dark:text-white hover:text-primary transition-colors"
                  >
                    +251 939001695
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Location</h4>
                  <p className="text-black dark:text-white">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center space-y-2">
              <h4 className="font-medium text-zinc-800 dark:text-zinc-100">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/mustafa-kamal-a1a7a8243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="https://wa.me/251939001695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={32} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">
              Send a Message
            </h3>
            <form
              action="https://formspree.io/f/mkgzjlng"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-black dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-black dark:text-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-black dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-black dark:text-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-black dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-black dark:text-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting
                  ? "Sending..."
                  : isSent
                  ? "Message sent! "
                  : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
