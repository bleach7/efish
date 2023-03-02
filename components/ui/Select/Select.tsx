import { ArrowDown } from "@/assets/icons";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { ISelect } from "./Select.interface";

export const Select = ({ items, value, onChange }: ISelect) => {
  return (
    <Listbox value={value} onChange={onChange} as="div" className="relative">
      {({ open }) => (
        <>
          <Listbox.Button
            as="button"
            type="button"
            className="grid grid-cols-[1fr_22px] items-center gap-x-[10px] rounded-[5px] border border-[#D3E7FB] bg-white px-[20px] py-[12px] text-[14px] font-normal leading-[19px] text-[#0A091D]"
          >
            <span>{value.name}</span>
            <ArrowDown
              className={classNames(
                "h-auto w-full transition-colors duration-300 ease-in-out",
                {
                  ["rotate-180"]: open === true,
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
              className="absolute z-10 w-full translate-y-[10px] overflow-hidden rounded-[5px] border border-[#D3E7FB] bg-white"
            >
              {items.map((item) => (
                <Listbox.Option key={item.id} value={item} as="li">
                  <button
                    type="button"
                    className="inline-block w-full px-[20px] py-[12px] text-start"
                  >
                    {item.name}
                  </button>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};
