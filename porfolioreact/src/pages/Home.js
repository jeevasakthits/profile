import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const navPages = [
  {
    title: "Works",
    navigate_url: "/works",
    imageSrc: "/assets/works.svg",
  },
  {
    title: "Resume",
    navigate_url: "/resume",
    imageSrc: "/assets/resume.svg",
  },
  {
    title: "Self",
    navigate_url: "/self",
    imageSrc: "/assets/self.svg",
  },
];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ThemeChangeButton() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <button
      onClick={colorMode.toggleColorMode}
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
    >
      <span className="hidden dark:inline">🌙</span>
      <span className="inline dark:hidden">☀️</span>
      <span>Theme</span>
    </button>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const colorMode = useMemo(
    () => ({ toggleColorMode: () => setDark((v) => !v) }),
    []
  );

  const logoUrl = process.env.PUBLIC_URL + "/logo.png";
  const emailIcon = process.env.PUBLIC_URL + "/assets/email.svg";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={logoUrl} alt="Logo" className="h-6 w-6" />
            <span className="font-semibold text-slate-800 dark:text-slate-100">Jeeva</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-slate-700 dark:text-slate-300">
            {navPages.map((item) => (
              <Link key={item.title} to={item.navigate_url} className="hover:text-slate-900 dark:hover:text-white transition">
                {item.title}
              </Link>
            ))}
            <ThemeChangeButton />
          </nav>
        </div>
      </header>

      <main className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <section className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-wide text-blue-600 font-medium">Frontend Engineer</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
              Building fast, beautiful, accessible web experiences.
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I craft responsive interfaces with React, Tailwind CSS, and MUI, with a focus on performance and delightful interactions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:jeevathangavelss@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
                <img src={emailIcon} alt="Email" className="h-5 w-5" /> Contact
              </a>
              <Link to="/works" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                <img src={process.env.PUBLIC_URL + "/assets/works.svg"} alt="Works" className="h-5 w-5" /> View Works
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 dark:from-blue-400/10 dark:to-cyan-300/10 border border-slate-200 dark:border-slate-800" />
            <div className="absolute inset-0 grid place-items-center">
              <img src={logoUrl} alt="Profile" className="h-24 w-24 rounded-full ring-4 ring-white dark:ring-slate-900 shadow-lg" />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pb-20">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Quick links</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {navPages.map((item) => (
              <Link key={item.title} to={item.navigate_url} className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <img src={process.env.PUBLIC_URL + item.imageSrc} alt={item.title} className="h-6 w-6 opacity-80 group-hover:opacity-100" />
                  <span className="font-medium text-slate-800 dark:text-slate-100">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Jeeva</span>
          <a className="hover:text-slate-700 dark:hover:text-slate-300" href="mailto:jeevathangavelss@gmail.com">jeevathangavelss@gmail.com</a>
        </div>
      </footer>
    </ColorModeContext.Provider>
  );
}
