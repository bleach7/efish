import { LogoBlueIcon, LogoGrayIcon } from "@/assets/icons";
import classNames from "classnames";
import Link from "next/link";
import { ILogo } from "./Logo.interface";

export const Logo = ({ color, size, className }: ILogo) => {
  return (
    <Link
      href="/"
      className={classNames(
        "grid gap-x-[10px] uppercase",
        {
          ["grid-cols-[56px_1fr]"]: size === "sm",
          ["grid-cols-[70px_1fr] gap-y-[10px]"]: size === "bg",
          ["text-[#BABABA]"]: color === "gray",
        },
        className
      )}
    >
      {color == "blue" ? (
        <LogoBlueIcon className="row-span-2 h-auto w-full" />
      ) : (
        <LogoGrayIcon className="row-span-2 h-auto w-full" />
      )}
      <p
        className={classNames("font-bold", {
          ["max-w-[210px] text-[12px] leading-[16px]"]: size === "sm",
          ["max-w-[245px] text-[14px] leading-[19px]"]: size === "bg",
        })}
      >
        Мониторинг рыб и других водных животных
      </p>
      <p
        className={classNames("text-[8px] leading-[11px]", {
          ["max-w-[250px]"]: size === "sm",
          ["max-w-[290px]"]: size === "bg",
        })}
      >
        Министерство экологогии, геологии и природных ресурсов Республики
        Казахстан
      </p>
    </Link>
  );
};
