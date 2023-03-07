import { EyeCloseIcon, EyeOpenIcon, LockIcon, UserIcon } from "@/assets/icons";
import { useState } from "react";
import { Button } from "../Button";

export const LoginEmailTab = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <form className="flex w-full flex-col items-center">
      <fieldset className="flex w-full flex-col gap-y-[10px]">
        <div className="relative w-full">
          <UserIcon className="pointer-events-none absolute top-2/4 left-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
          <input
            type="text"
            placeholder="Ваш логин"
            className="inline-block w-full rounded-[5px] py-[15px] pl-[64px] pr-[20px] text-[16px] font-normal leading-[21px] text-[#0A091D] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
          />
        </div>
        <div className="relative w-full">
          <LockIcon className="pointer-events-none absolute top-2/4 left-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
          <input
            type={isHidden ? "password" : "text"}
            placeholder="Ваш пароль"
            className="inline-block w-full rounded-[5px] py-[15px] pl-[64px] pr-[20px] text-[16px] font-normal leading-[21px] text-[#0A091D] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
          />
          <button
            type="button"
            onClick={handleToggleIsHidden}
            className="absolute top-2/4 right-[20px] flex h-[24px] w-[24px] -translate-y-2/4 items-center justify-center text-[#52A5FC]"
          >
            {isHidden ? (
              <EyeOpenIcon className="h-auto w-full" />
            ) : (
              <EyeCloseIcon className="h-auto w-full" />
            )}
          </button>
        </div>
      </fieldset>
      <Button type="submit" bg="blue" size="bg" className="mt-[30px]">
        Войти
      </Button>
    </form>
  );
};
