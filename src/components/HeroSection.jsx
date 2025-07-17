import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center px-4 pt-24"
    >
      {/* Hero Content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="space-y-6 text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black dark:text-white opacity-0 animate-fade-in">
            Hi, I'm
          </span>{" "}
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            Mustafa Kamal
          </span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 mb-8">
          I'm into modern technologies specializing in front-end development, I
          build interfaces that are beautiful and functional.
        </p>

        <div className="opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View my work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
