import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background text-white mt-12 flex flex-wrap justify-between items-center">
      <p className="text-sm text-black dark:text-white">
        &copy; {new Date().getFullYear()} Mustafa Kamal. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
