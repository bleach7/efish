import { UserIcon } from "@/assets/icons";
import classNames from "classnames";
import { forwardRef } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={classNames(
            "inline-block rounded-[5px] border border-[#D3E7FB] py-[12px] px-[20px] text-[14px] font-normal leading-[19px] text-[#0A091D]",
            className
          )}
          {...props}
        />
        <div className="relative">
          <UserIcon className="absolute top-2/4 left-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
          <input className="inline-block rounded-[5px] bg-white py-[15px] pr-[20px] pl-[64px] text-[16px] font-normal leading-[21px] text-[#0A091D] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]" />
        </div>
        <div className="relative">
          <UserIcon className="absolute top-2/4 left-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
          <input className="inline-block rounded-[5px] bg-white py-[15px] px-[64px] text-[16px] font-normal leading-[21px] text-[#0A091D] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]" />
          <UserIcon className="absolute top-2/4 right-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
        </div>
        <div className="relative">
          <input className="inline-block rounded-[5px] border border-[#D3E7FB] py-[12px] pl-[20px] pr-[64px] text-[14px] font-normal leading-[19px] text-[#0A091D]" />
          <UserIcon className="absolute top-2/4 right-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
        </div>
        <div className="relative">
          <input className="inline-block rounded-[5px] border border-[#D3E7FB] py-[12px] pr-[64px] pl-[20px] text-[14px] font-normal leading-[19px] text-[#0A091D]" />
          <UserIcon className="absolute top-2/4 right-[20px] h-auto w-[24px] -translate-y-2/4 text-[#52A5FC]" />
        </div>
      </>
    );
  }
);

Input.displayName = "Input";
