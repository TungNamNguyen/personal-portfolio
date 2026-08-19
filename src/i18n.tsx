import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "en" | "vi";

/** A value that genuinely differs between the two languages. */
export type Localized = Record<Lang, string>;

/**
 * Content is written in either shape: a plain string when the text is the same
 * either way — names, brands, product names, figures — or a `Localized` pair
 * when it has to be translated. One type for both keeps proper nouns from being
 * padded out with a duplicated string, and TypeScript still refuses a pair that
 * is missing a language.
 */
export type Text = string | Localized;

export function resolve(value: Text, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

/**
 * Interface strings — everything the page says in its own voice rather than
 * quoting from constants.tsx. Section names live here too, so the nav and the
 * headings that repeat them can never fall out of step.
 */
export const UI = {
  about: { en: "About", vi: "Giới thiệu" },
  skills: { en: "Skills", vi: "Kỹ năng" },
  experience: { en: "Experience", vi: "Kinh nghiệm" },
  education: { en: "Education", vi: "Học vấn" },
  projects: { en: "Projects", vi: "Dự án" },
  recommendations: { en: "Recommendations", vi: "Nhận xét" },
  getInTouch: { en: "Get in touch", vi: "Liên hệ" },
  downloadResume: { en: "Download resume", vi: "Tải CV" },
  current: { en: "Current", vi: "Hiện tại" },
  /** Joins a person to their employer: "General Manager at Prompcorp". */
  at: { en: "at", vi: "tại" },
  /** Prefixes a link's target in an accessible name: "Open AeroStream". */
  open: { en: "Open", vi: "Mở" },
  /** Marks a quotation left in its original language. */
  originalEnglish: { en: "", vi: "Nguyên văn tiếng Anh" },
  backToTop: { en: "Back to top", vi: "Lên đầu trang" },
  darkMode: { en: "Dark mode", vi: "Chế độ tối" },
  openMenu: { en: "Open menu", vi: "Mở menu" },
  closeMenu: { en: "Close menu", vi: "Đóng menu" },
  language: { en: "Language", vi: "Ngôn ngữ" }
} satisfies Record<string, Localized>;

type UiKey = keyof typeof UI;

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Resolves a content value to the active language. */
  t: (value: Text) => string;
  /** Interface strings, already resolved. */
  ui: Record<UiKey, string>;
};

const STORAGE_KEY = "lang";

/**
 * A stored choice always wins. Failing that the browser decides, so a Vietnamese
 * visitor lands on Vietnamese without having to find the switch — and everyone
 * else lands on English, which is what the resume and the OG tags are written in.
 */
function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "vi") return stored;
  } catch {
    /* localStorage unavailable (private mode) — fall through to the browser. */
  }
  return navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setStoredLang] = useState<Lang>(getInitialLang);

  // Keeps the document's own language in step with what is on screen, so screen
  // readers pick the right voice and browsers stop offering to translate a page
  // that is already in the reader's language.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageValue>(() => {
    const setLang = (next: Lang) => {
      setStoredLang(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* The choice simply will not survive a reload. */
      }
    };

    const ui = Object.fromEntries(
      Object.entries(UI).map(([key, pair]) => [key, pair[lang]])
    ) as Record<UiKey, string>;

    return { lang, setLang, t: (text: Text) => resolve(text, lang), ui };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLang must be used inside <LanguageProvider>");
  return value;
}
