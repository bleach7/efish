import classNames from "classnames";
import { forwardRef } from "react";
import { IButton } from "./Button.interface";

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ className, children, icon: Icon, ...props }, ref) => {
    return (
      <button ref={ref} className={classNames(className)} {...props}>
        {children}
        <Icon />
      </button>
    );
  }
);

Button.displayName = "Button";
