import { LANDING_NAV_LINKS } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import { Container } from "../Container";
import { LangSwitcher } from "../LangSwitcher";
import { Logo } from "../Logo";

export const LandingHeader = () => {
  return (
    <header>
      <Container width="landing">
        <div className="flex items-center justify-between py-[50px]">
          <Logo color="blue" size="bg" />
          <nav>
            <ul className="flex items-center">
              {LANDING_NAV_LINKS.map((link, i) => (
                <li
                  key={i}
                  className={classNames({
                    ["mr-[20px]"]: link.path === "#about",
                    ["mr-[50px] last:mr-0"]: link.path !== "#about",
                  })}
                >
                  <Link
                    href={link.path}
                    className={classNames("inline-block font-medium", {
                      ["rounded-[44px] bg-[#52A5FC] px-[30px] py-[15px] text-white"]:
                        link.path === "#about",
                      ["transition-colors duration-300 ease-in-out hover:text-[#52A5FC]"]:
                        link.path !== "#about",
                    })}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LangSwitcher type="select" />
        </div>
      </Container>
    </header>
  );
};
