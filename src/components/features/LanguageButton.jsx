import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageButton() {
  const { t, i18n } = useTranslation();
  const changeAppLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="p-10">
      <div className="py-5">
        <h1 className="text-[30px] capitalize font-bold">
          {" "}
          {t("general.hello")}{" "}
        </h1>
      </div>
      <button
        className="p-2 shadow-md bg-blue-700 text-white rounded me-3"
        onClick={() => changeAppLanguage("en")}
      >
        {" "}
        English{" "}
      </button>
      <button
        className="p-2 shadow-md bg-red-700 text-white rounded"
        onClick={() => changeAppLanguage("ar")}
      >
        {" "}
        Arabic{" "}
      </button>
    </div>
  );
}
