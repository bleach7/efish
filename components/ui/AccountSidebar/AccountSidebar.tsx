import { ADMIN_NAV_LINKS } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubMenu } from "../SubMenu";

export const AccountSidebar = () => {
  const router = useRouter();

  return (
    <aside>
      <nav>
        <ul className="flex flex-col gap-y-[2px] text-[14px] font-medium leading-[19px]">
          {ADMIN_NAV_LINKS.map((link, i) => {
            return (
              <li key={i} className="group">
                {link.subLinks && <SubMenu link={link} />}
                {!link.subLinks && (
                  <Link
                    href={link.path}
                    className={classNames(
                      "grid grid-cols-[24px_1fr] items-center gap-x-[15px] py-[15px] px-[20px] group-last:rounded-[0_0_10px_10px]",
                      {
                        ["bg-[#52A5FC] text-white"]:
                          router.pathname === link.path ||
                          router.asPath === link.path,
                        ["bg-white"]:
                          router.pathname !== link.path ||
                          router.asPath !== link.path,
                      }
                    )}
                  >
                    <span></span>
                    <span className="max-w-[144px]">{link.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
