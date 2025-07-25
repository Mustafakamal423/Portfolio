import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full py-5 bg-background text-black dark:text-white">
      <div className="container flex items-center justify-between">
        {/* Logo & Image */}
        <a
          href="#hero"
          className="flex items-center space-x-4 text-xl font-bold"
        >
          <span className="text-black dark:text-white text-glow">
            Mustafa <span className="text-primary">Portfolio</span>
          </span>
          <img
            src="me2.png"
            alt="Mustafa Kamal"
            className="w-12 h-12 rounded-full border-2 border-black shadow-md"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="text-primary hover:text-yellow-400 transition"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="h-5 w-5 hidden dark:inline" />
          </button>

          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-black dark:text-white hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle + Theme Switch */}
        <div className="flex flex-col items-end space-y-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-primary hover:text-yellow-400 transition"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="h-5 w-5 hidden dark:inline" />
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-black dark:text-white z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-black dark:text-white hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
