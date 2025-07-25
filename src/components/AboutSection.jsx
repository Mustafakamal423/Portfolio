import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="pt-16 pb-116 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl text-black dark:text-white md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl text-primary dark:text-white font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-black dark:text-white">
              I specialize in creating responsive, accessible, and performant
              web applications using modern technologies.
            </p>

            <p className="text-black dark:text-white">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right column with feature cards and icons */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg text-primary font-bold">Clean Code</h4>
                <p className="text-black dark:text-white text-sm">
                  Writing clean and maintainable code is my top priority.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg text-primary font-semibold">
                  User Focused
                </h4>
                <p className="text-black dark:text-white text-sm">
                  I create with the user experience and accessibility in mind.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg text-primary font-semibold">
                  Professional Projects
                </h4>
                <p className="text-black dark:text-white text-sm">
                  Hands-on experience building real-world applications and
                  client work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
