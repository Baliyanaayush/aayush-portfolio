import { Moon } from "lucide-react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
];

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-[1245px] px-4 lg:px-0">
      <nav className="flex h-[72px] items-center justify-between rounded-[22px] border border-white/10 bg-[#0b0f14]/90 px-5 backdrop-blur-xl">
        
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-500 text-sm font-bold text-orange-500">
            AK
          </div>

          <span className="hidden text-[16px] font-semibold text-slate-200 sm:block">
            Aayush Kumar Baliyan
          </span>
        </button>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "border border-orange-500/40 bg-orange-500/10 text-orange-500"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Theme Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-orange-500/30 hover:text-orange-500"
          aria-label="Toggle theme"
        >
          <Moon size={18} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;