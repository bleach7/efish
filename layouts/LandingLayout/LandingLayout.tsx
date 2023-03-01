import { LandingFooter, LandingHeader } from "@/components";
import { ILandingLayout } from "./LandingLayout.interface";

export const LandingLayout = ({ children }: ILandingLayout) => {
  return (
    <>
      <LandingHeader />
      <main className="flex-auto pb-[200px]">{children}</main>
      <LandingFooter />
    </>
  );
};
