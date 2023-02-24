import classNames from "classnames";
import { forwardRef } from "react";
import { IButton } from "./Button.interface";

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ className, children, icon: Icon, shadow, bg, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "w-fit rounded-[44px] px-[30px] py-[15px]",
          {
            ["shadow-[0px_8px_50px_rgba(82,165,252,0.7)]"]: shadow,
            ["bg-[#52A5FC] text-white"]: bg === "blue",
            ["bg-[#0A091D] text-white"]: bg === "dark",
            ["bg-[#5ABB5E] text-white"]: bg === "green",
            ["bg-[#FFFFFF] text-[#0A091D]"]: bg === "white",
            ["text-[14px] leading-[19px]"]: size === "sm",
            ["text-[16px] font-medium leading-[21px]"]: size === "bg",
            ["grid grid-cols-[1fr_15px] items-center gap-x-[10px]"]:
              Icon && size === "sm",
            ["grid grid-cols-[1fr_20px] items-center gap-x-[10px]"]:
              Icon && size === "bg",
            ["inline-block"]: !Icon,
          },
          className
        )}
        {...props}
      >
        {!Icon ? <>{children}</> : <span>{children}</span>}
        {Icon && <Icon className="h-auto w-full" />}
      </button>
    );
  }
);

Button.displayName = "Button";
