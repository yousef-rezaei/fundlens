import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
] as const;

function App() {
  const { t, i18n } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 text-slate-900">
      <h1 className="text-4xl font-bold">{t("app.title")}</h1>
      <p className="max-w-md text-center text-lg text-slate-600">{t("app.tagline")}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-500">{t("language.label")}:</span>
        {LANGUAGES.map((lng) => (
          <button
            key={lng.code}
            type="button"
            onClick={() => void i18n.changeLanguage(lng.code)}
            className={`rounded px-3 py-1 text-sm font-medium ${
              i18n.resolvedLanguage === lng.code
                ? "bg-slate-900 text-white"
                : "bg-slate-200 text-slate-700"
            }`}
          >
            {lng.label}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
