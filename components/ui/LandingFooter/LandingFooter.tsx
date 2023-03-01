import { LANDING_NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Container } from "../Container";
import { Logo } from "../Logo";

export const LandingFooter = () => {
  return (
    <footer className="bg-[#FBFBFB]">
      <Container width="landing">
        <div className="flex items-center justify-between py-[63px] text-[#BCBCBC]">
          <Logo color="gray" size="bg" />
          <ul className="flex items-center gap-x-[50px] text-[14px] leading-[19px]">
            {LANDING_NAV_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  className="inline-block font-medium transition-colors duration-300 ease-in-out hover:text-[#0A091D]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
