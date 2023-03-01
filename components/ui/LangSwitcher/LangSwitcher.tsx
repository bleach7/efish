import { ArrowDown } from "@/assets/icons";
import { LANGS } from "@/constants";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useState } from "react";
import { ILangSwitcher } from "./LangSwitcher.interface";

export const LangSwitcher = ({ className, type }: ILangSwitcher) => {
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage(
    "SELECTED_LANG",
    LANGS[0].id
  );
  const [selectedSelectLang, setSelectedSelectLang] = useState(LANGS[0]);

  const handleToggleLanguage = (id: string) => {
    setSelectedLanguage(id);
  };

  if (type === "select") {
    return (
      <Listbox
        value={selectedSelectLang}
        onChange={setSelectedSelectLang}
        as="div"
        className="relative text-[16px] font-medium leading-[21px]"
      >
        {({ open }) => (
          <>
            <Listbox.Button
              as="button"
              type="button"
              className={classNames(
                "flex w-[68px] items-center justify-between text-[#52A5FC] transition-colors duration-300 ease-in-out hover:text-[#5ABB5E]",
                {
                  "text-[#5ABB5E]": open,
                }
              )}
            >
              <span>{selectedSelectLang?.name}</span>
              <ArrowDown
                className={classNames(
                  "h-auto w-[22px] transition-transform duration-300 ease-in-out",
                  {
                    "rotate-180": open === true,
                  }
                )}
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options
                as="ul"
                className="absolute z-10 w-[calc(100%+10px)] -translate-x-[10px] translate-y-[10px] overflow-hidden rounded-[5px] border border-[#D3E7FB] bg-white shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
              >
                {LANGS.map((lang) => (
                  <Listbox.Option key={lang.id} value={lang} as="li">
                    {({ active, selected }) => (
                      <button
                        type="button"
                        className={classNames(
                          "inline-block w-full py-[5px] pl-[10px] text-start transition-colors duration-300 ease-in-out",
                          {
                            ["bg-[#52A5FC] text-white"]: active,
                            ["text-[#52A5FC]"]: selected,
                          }
                        )}
                      >
                        {lang.name}
                      </button>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    );
  }

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
