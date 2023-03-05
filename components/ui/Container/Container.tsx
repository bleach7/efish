import classNames from "classnames";
import { IContainer } from "./Container.interface";

export const Container = ({
  children,
  width,
  className,
  ...props
}: IContainer) => {
  return (
    <div
      className={classNames(
        "mx-auto px-[30px]",
        {
          ["max-w-[1260px]"]: width === "landing",
          ["max-w-[1720px]"]: width === "account",
          ["max-w-[475px]"]: width === "login",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
