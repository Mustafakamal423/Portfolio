import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-STORE",
    description:
      "A modern online retail platform designed for showcasing and selling lifestyle and fashion products. The homepage emphasizes visual appeal with a clean layout, a prominent New Arrivals section, and a well-organized grid of featured items. Built with React, TailwindCSS, and Supabase, the site ensures responsive design, fast performance, and backend support for product listings and user authentication.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "BEREKA COFFEE ",
    description:
      "An elegant coffee brand website that highlights the authenticity of Ethiopian coffee. The homepage features a hero section with strong branding, a call to action, and product visuals to engage coffee lovers. Built using TypeScript, D3.js, and Next.js, the site combines robust type safety, rich UI interactions, and server-side rendering for SEO optimization.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "HAILE Hotel & Resort",
    description:
      "A professional website for a hospitality business in Ethiopia. The homepage includes booking functionality, photo galleries, and key service information to support online reservations. Built with React, Node.js, and Stripe, it delivers a dynamic frontend, secure backend, and seamless online payment integration.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="pt-8 md:pt-20 pb-16 md:pb-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl text-black dark:text-white md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-black dark:text-white mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-xs card-hover transition-colors"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/Mustafakamal423"
                  >
                    Check My Github <ArrowRight size={16} />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-black dark:text-white mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
