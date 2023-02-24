import { LANGS } from "@/constants";
import { useLocalStorage } from "@/hooks/use-local-storage";
import classNames from "classnames";
import { ILangSwitcher } from "./LangSwitcher.interface";

export const LangSwitcher = ({ className }: ILangSwitcher) => {
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage(
    "SELECTED_LANG",
    LANGS[0].id
  );

  const handleToggleLanguage = (id: string) => {
    setSelectedLanguage(id);
  };

  return (
    <section
      className={classNames(
        "flex items-center gap-x-[20px] font-medium text-[#C1DFFF]",
        className
      )}
    >
      {LANGS.map((lang, i) => (
        <button
          key={i}
          type="button"
          onClick={() => handleToggleLanguage(lang.id)}
          className={classNames("transition-colors duration-300 ease-in-out", {
            ["text-[#52A5FC]"]: selectedLanguage === lang.id,
          })}
        >
          {lang.shortName}
        </button>
      ))}
    </section>
  );
};
