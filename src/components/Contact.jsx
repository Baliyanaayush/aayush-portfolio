
const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-purple-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something
            <span className="text-gray-500"> together.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-500">
            Have a project, internship opportunity, or just want to
            connect? Feel free to reach out. I'm always open to
            interesting opportunities and conversations.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Left Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">

            <h3 className="text-2xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              Whether you're looking for a developer, have an idea
              you'd like to discuss, or simply want to say hello,
              I'd love to hear from you.
            </p>

            {/* Email */}
            <a
              href="mailto:aayushkumar93036@gmail.com"
              className="mt-8 block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-purple-400/30 hover:bg-white/[0.04]"
            >
              <p className="text-xs uppercase tracking-[2px] text-gray-600">
                Email
              </p>

              <p className="mt-2 break-all text-sm text-gray-300">
                aayushkumar93036@gmail.com
              </p>
            </a>

            {/* Social Links */}
            <div className="mt-4 grid grid-cols-2 gap-4">

              <a
                href="https://github.com/Baliyanaayush"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <p className="text-xs uppercase tracking-[2px] text-gray-600">
                  GitHub
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  @Baliyanaayush
                </p>
              </a>

              <a
                href="https://linkedin.com/in/aayush-kumar-baliyan-0b858b396"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <p className="text-xs uppercase tracking-[2px] text-gray-600">
                  LinkedIn
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  Connect with me
                </p>
              </a>

            </div>

          </div>

          {/* Right Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 p-8 sm:p-10">

            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-purple-400/10" />

            <div className="relative">

              <p className="text-sm font-medium text-purple-300">
                Available for opportunities
              </p>

              <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Have an idea?
                <br />
                Let's talk.
              </h3>

              <p className="mt-5 max-w-md leading-7 text-gray-500">
                I'm currently looking for opportunities where I can
                contribute my full-stack development and UI/UX skills
                while continuing to grow as a developer.
              </p>

              <a
                href="mailto:aayushkumar93036@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1"
              >
                Start a conversation

                <span className="text-lg">
                  ↗
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

