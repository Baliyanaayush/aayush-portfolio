const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "BG Remover",
      type: "Full Stack / SaaS",
      description:
        "An AI-powered background removal platform where users can upload images, remove backgrounds, manage credits, and purchase additional credits through online payments.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "AI",
      ],
      github: "https://github.com/Baliyanaayush/BG_Remover",
      live: "https://ai-bg-removal.netlify.app/",
    },
    {
      number: "02",
      title: "Prescripto",
      type: "Full Stack",
      description:
        "A complete doctor appointment platform with user, doctor, and admin functionality. Users can explore doctors, select appointment slots, and manage their appointments.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      github: "https://github.com/Baliyanaayush/prescripto-",
      live: "doc-prescripto.netlify.app",
    },
    {
      number: "03",
      title: "CodeNamastey",
      type: "Full Stack / AI",
      description:
        "A coding platform where developers can solve programming problems, write code using a Monaco editor, and interact with an AI chatbot for assistance.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Monaco Editor",
        "Gemini AI",
      ],
      github: "#",
      live: "#",
    },

    {
      number: "04",
      title: "Grocify",
      type: "Frontend",
      description:
        "A modern grocery shopping website focused on clean UI, responsive design, product presentation, and a smooth shopping experience.",
      tech: [
        "React",
        "Tailwind CSS",
        "JavaScript",
      ],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-16">

          <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-purple-400">
            Selected Work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects I've built
            </h2>

            <p className="max-w-md leading-7 text-gray-500">
              A collection of projects where I combine full-stack
              development, problem solving, AI integration and UI/UX
              design.
            </p>

          </div>

        </div>

        {/* Projects List */}
        <div className="space-y-6">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]"
            >

              {/* Background Number */}
              <div className="pointer-events-none absolute right-8 top-5 select-none text-[100px] font-bold leading-none text-white/[0.02] transition-all duration-500 group-hover:text-purple-400/[0.04]">
                {project.number}
              </div>

              <div className="relative grid gap-8 p-7 md:grid-cols-[90px_1fr_120px] md:p-10">

                {/* Project Number */}
                <div className="hidden md:block">
                  <span className="text-sm font-medium tracking-wider text-gray-600">
                    {project.number}
                  </span>
                </div>

                {/* Project Content */}
                <div>

                  {/* Project Type */}
                  <span className="inline-block rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1 text-xs font-medium text-purple-300">
                    {project.type}
                  </span>

                  {/* Title */}
                  <h3 className="mt-5 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-4xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">

                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-white/10"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Project Links */}
                <div className="flex items-start gap-3 md:flex-col">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="group/link flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <span className="text-lg font-bold transition-transform duration-300 group-hover/link:scale-110">
                      {"</>"}
                    </span>
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live website`}
                    className="group/link flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-400/10 hover:text-purple-300"
                  >
                    <span className="text-xl transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                      ↗
                    </span>
                  </a>

                </div>

              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400 transition-all duration-500 group-hover:w-full" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;

