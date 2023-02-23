import { ILandingLayout } from "./LandingLayout.interface";

export const LandingLayout = ({ children }: ILandingLayout) => {
  return (
    <>
      <header>Header</header>
      <main className="flex-auto">{children}</main>
      <footer>Footer</footer>
    </>
  );
};
