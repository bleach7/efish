import { ArrowDown, ExitIcon, Settings } from "@/assets/icons";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { Fragment } from "react";

export const User = () => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            as="button"
            type="button"
            className={
              "grid grid-cols-[1fr_22px] items-center gap-x-[31px] rounded-[110px] bg-[#52A5FC] py-[14px] px-[27px] text-start text-white"
            }
          >
            <span className="order-1 text-[14px] font-semibold leading-[19px]">
              Артем Киценко
            </span>
            <span className="order-3 text-[12px] leading-[16px] text-[#A1CAF3]">
              Администратор СПП
            </span>
            <ArrowDown
              className={classNames(
                "order-2 row-span-2 h-auto w-full transition-transform duration-300 ease-in-out",
                {
                  ["rotate-180"]: open === true,
                }
              )}
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="section"
              className="absolute z-10 flex w-full translate-y-[12px] flex-col gap-y-[13px] rounded-[10px] bg-white py-[21px] px-[25px] shadow-[0px_8px_50px_rgba(210,232,254,0.4)]"
            >
              <Menu.Item
                as={Link}
                href="/account/settings"
                className="grid w-full grid-cols-[18px_1fr] gap-x-[10px] text-[14px] font-medium leading-[19px]"
              >
                <Settings className="h-auto w-full text-[#52A5FC]" />
                <span>Настройки</span>
              </Menu.Item>
              <Menu.Item
                as={Link}
                href="/login"
                className="grid w-full grid-cols-[18px_1fr] gap-x-[10px] text-[14px] font-medium leading-[19px]"
              >
                <ExitIcon className="h-auto w-full text-[#52A5FC]" />
                <span>Выход</span>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
