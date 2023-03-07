import { CloudIcon } from "@/assets/icons";
import { useRef } from "react";
import { Button } from "../Button";

export const LoginEDSTab = () => {
  const hiddenFileInputEDS = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    if (hiddenFileInputEDS.current) {
      hiddenFileInputEDS.current.click();
    }
  };

  return (
    <form className="flex w-full flex-col items-center">
      <input type="file" ref={hiddenFileInputEDS} className="sr-only" />
      <button
        type="button"
        onClick={handleFileClick}
        className="mb-[30px] flex w-full items-center justify-center gap-x-[20px] rounded-[5px] bg-white py-[14px] px-[20px] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
      >
        <CloudIcon className="h-auto w-[24px] text-[#52A5FC]" />
        <span>Загрузите сертификат</span>
      </button>
      <Button type="submit" size="bg" bg="blue">
        Войти
      </Button>
    </form>
  );
};
