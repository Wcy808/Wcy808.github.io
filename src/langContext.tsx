import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./content";

const langContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "zh",
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <langContext.Provider value={{ lang, toggle: () => setLang((l) => (l === "zh" ? "en" : "zh")) }}>
      {children}
    </langContext.Provider>
  );
}

export function useLang() {
  return useContext(langContext);
}