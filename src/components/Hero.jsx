import { ArrowDown, Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Availability */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
          <Sparkles size={15} className="text-purple-400" />

          <span>Available for opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Aayush.
          </span>
        </h1>

        {/* Role */}
        <h2 className="mt-7 text-2xl font-semibold text-gray-300 sm:text-3xl">
          MERN Stack Developer
          <span className="mx-3 text-gray-700">/</span>
          UI/UX Designer
        </h2>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
          I build modern, scalable and user-focused web applications
          using the MERN stack. I enjoy turning ideas into clean,
          functional and visually engaging digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:-translate-y-1"
          >
            View My Work

            <ArrowDown
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

          <a
  href="/resume.pdf"
  download="Aayush-Kumar-Baliyan-Resume.pdf"
  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-400/10"
>
  <span>↓</span>
  Download Resume
</a>

        </div>

      </div>
    </section>
  );
};

export default Hero;