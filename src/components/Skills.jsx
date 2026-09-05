import {Code2,Database,Server,GitBranch,Palette, Braces,} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      category: "Language",
      icon: Braces,
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: Code2,
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: Server,
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: Server,
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: Database,
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      icon: GitBranch,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: Code2,
    },
    {
      name: "UI/UX Design",
      category: "Design",
      icon: Palette,
    },
    {
      name: "AI Integration",
      category: "Integrating AI features using OpenAI APIs ",
      icon: Palette,
    },
  ];

  return (
    <section
      id="skills"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-purple-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My tech stack
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            Technologies and tools I use to build modern,
            scalable and user-focused applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-purple-400 transition group-hover:bg-purple-500/10">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;