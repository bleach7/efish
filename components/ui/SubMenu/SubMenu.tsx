import { ArrowDown } from "@/assets/icons";
import { Menu } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { ISubMenu } from "./SubMenu.interface";

export const SubMenu = ({ link }: ISubMenu) => {
  const [height, setHeight] = useState<any>(0);

  const router = useRouter();

  return (
    <Menu as="div">
      <div className="group grid grid-cols-[1fr_55px] items-center">
        <Link
          href={link.path}
          className={classNames(
            "grid grid-cols-[24px_1fr] gap-x-[15px] py-[15px] pl-[20px] pr-[15px] transition-colors duration-300 ease-in-out group-first:rounded-[10px_0_0_0]",
            {
              ["bg-[#52A5FC] text-white"]:
                router.pathname === link.path || router.asPath === link.path,
              ["bg-white group-hover:text-[#52A5FC]"]:
                router.pathname !== link.path || router.asPath !== link.path,
            }
          )}
        >
          <span></span>
          <span className="max-w-[133px]">{link.name}</span>
        </Link>
        <button
          type="button"
          onClick={() => setHeight(height === 0 ? "auto" : 0)}
          className={classNames(
            "flex h-full w-full items-center justify-center transition-colors duration-300 ease-in-out group-first:rounded-[0_10px_0_0]",
            {
              ["bg-[#52A5FC] text-white"]:
                router.pathname === link.path || router.asPath === link.path,
              ["bg-white group-hover:text-[#52A5FC]"]:
                router.pathname !== link.path || router.asPath !== link.path,
            }
          )}
        >
          <ArrowDown
            className={classNames(
              "h-auto w-[22px] transition-transform duration-300 ease-in-out",
              {
                ["rotate-180"]: height !== 0,
              }
            )}
          />
        </button>
      </div>
      <AnimateHeight id="example-panel" duration={300} height={height}>
        <section className="flex flex-col">
          {link.subLinks.map((subLink, i) => (
            <Link
              key={i}
              href={subLink.path}
              className={classNames(
                "grid grid-cols-[24px_1fr] items-center gap-x-[15px] py-[15px] px-[20px] transition-colors duration-300 ease-in-out group-last:rounded-[0_0_10px_10px]",
                {
                  ["bg-[#52A5FC] text-white"]:
                    router.pathname === subLink.path ||
                    router.asPath === subLink.path,
                  ["bg-white hover:text-[#52A5FC]"]:
                    router.pathname !== subLink.path ||
                    router.asPath !== subLink.path,
                }
              )}
            >
              <span></span>
              <span>Заявки на регистрацию</span>
            </Link>
          ))}
        </section>
      </AnimateHeight>
    </Menu>
  );
};
