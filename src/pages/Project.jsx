import projects from "../data/project";
import FadeIn from "../components/FadeIn";

export const Project = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      <FadeIn>
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          My Projects
          <span className="block w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <FadeIn direction="right" delay={0.25} key={project.id}>
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
              {/* Project Preview Image */}
              <div className="bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top"
                />
              </div>

              {/* Dark Info Section */}
              <div className="bg-linear-to-br from-[#2e1065] via-[#4c1d95] to-[#701a75] p-6 text-white">
                {/* Label */}
                <p className="text-xs font-medium tracking-widest text-purple-300 mb-2 uppercase">
                  Front-End
                </p>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-purple-200/80 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-purple-100 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-linear-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-400 hover:to-pink-400 text-sm font-medium transition-all"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};