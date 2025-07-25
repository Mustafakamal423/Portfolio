import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-between items-center px-6"
    >
      {/* Top content slightly pushed up */}
      <div className="text-center max-w-2xl mt-8 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="block text-black dark:text-white">Hi, I'm</span>
          <span className="block text-primary">Mustafa Kamal</span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          I'm into modern technologies specializing in front-end development. I
          build interfaces that are beautiful and functional.
          <br />I thrive on transforming ideas into interactive, accessible, and
          user-centric digital experiences. With a deep passion for frontend
          development and design, I enjoy working with modern tools like React,
          Tailwind CSS, and TypeScript to build clean, scalable interfaces. I'm
          constantly exploring new technologies and love collaborating on
          projects that challenge me to grow both technically and creatively.
        </p>
        <br />
        <a href="#about" className="cosmic-button">
          View My Work
        </a>
      </div>

      {/* Scroll indicator linked to #about */}
      <a
        href="#about"
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
