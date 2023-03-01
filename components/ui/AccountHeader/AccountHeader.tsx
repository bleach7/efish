import { NotificationIcon } from "@/assets/icons";
import { LangSwitcher, Logo, User } from "@/components/ui";
import classNames from "classnames";
import Link from "next/link";
import { IAccountHeader } from "./AccountHeader.interface";

export const AccountHeader = ({ className }: IAccountHeader) => {
  return (
    <header
      className={classNames(
        "flex items-center gap-x-[53px] rounded-[10px] bg-white py-[23px] px-[40px] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]",
        className
      )}
    >
      <Logo color="blue" size="sm" className="mr-auto" />
      <LangSwitcher />
      <Link href="/account/notifications" className="relative">
        <NotificationIcon className="h-auto w-[24px] text-[#5ABB5E]" />
        <p className="absolute -top-[7px] -right-[6px] z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[2px] border-white bg-[#5ABB5E] text-[12px] font-medium leading-none text-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)]">
          3
        </p>
      </Link>
      <User />
    </header>
  );
};
