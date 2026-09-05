import { useState } from "react";
import {Menu,X,Home, User,Code2, Mail,ExternalLink,} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: Home,
    },
    {
      name: "About",
      href: "#about",
      icon: User,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: Code2,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: Code2,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ];

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 top-5 z-[100] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111] text-white md:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-[280px]
          border-r border-white/10
          bg-[#080808]
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex h-full flex-col px-6 py-8">

          {/* Profile */}
          <div className="mb-8">
  <img
    src="/profile.jpg"
    alt="Aayush Kumar Baliyan"
    className="h-24 w-24 rounded-full object-cover border border-white/10"
  />

  <h2 className="mt-5 text-xl font-bold text-white">
    Aayush Kumar Baliyan
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    MERN Stack Developer
  </p>
</div>

          {/* Navigation */}
          <nav className="mt-12 flex-1">

            <p className="mb-4 px-3 text-[11px] font-medium uppercase tracking-[3px] text-gray-600">
              Menu
            </p>

            <div className="space-y-1">

              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-gray-500 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />

                    <span>{item.name}</span>
                  </a>
                );
              })}

            </div>
          </nav>

          {/* Social */}
          <div>

            <p className="mb-4 px-3 text-[11px] font-medium uppercase tracking-[3px] text-gray-600">
              Connect
            </p>

            <div className="space-y-2">

              <a
                href="https://github.com/Baliyanaayush"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-500 transition hover:bg-white/[0.04] hover:text-white"
              >
                <span>GitHub</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="https://linkedin.com/in/aayush-kumar-baliyan-0b858b396"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-500 transition hover:bg-white/[0.04] hover:text-white"
              >
                <span>LinkedIn</span>
                <ExternalLink size={14} />
              </a>

            </div>

            <p className="mt-6 text-center text-[11px] text-gray-700">
              © 2026 Aayush Baliyan
            </p>

          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;