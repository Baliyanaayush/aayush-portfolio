import { Code2, Palette, Rocket, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building scalable web applications using React, Node.js, Express and MongoDB.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing clean, intuitive and responsive interfaces with a strong focus on user experience.",
    },
    {
      icon: Rocket,
      title: "Problem Solving",
      description:
        "Turning complex problems and ideas into practical, efficient digital solutions.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Constantly exploring modern technologies and improving my development skills.",
    },
  ];

  return (
    <section
      id="about"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-purple-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building things that
            <span className="text-gray-500"> actually matter.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-lg leading-8 text-gray-400">
              I'm Aayush Kumar Baliyan, a Computer Science student and
              full-stack developer passionate about building modern web
              applications.
            </p>

            <p className="mt-6 leading-8 text-gray-500">
              My primary focus is the MERN stack, where I work with
              React.js, Node.js, Express.js and MongoDB to create
              complete web applications from frontend to backend.
            </p>

            <p className="mt-6 leading-8 text-gray-500">
              Along with development, I have a strong interest in UI/UX
              design. I believe a good application should not only work
              well but also provide a smooth and intuitive experience.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-3xl font-bold text-white">4+</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-3xl font-bold text-white">MERN</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Stack
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-3xl font-bold text-white">2027</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Graduation
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-purple-400">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;