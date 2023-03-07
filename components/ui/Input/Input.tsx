import classNames from "classnames";
import { forwardRef } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className, icon, fHidePass, shadow, search, ...props }, ref) => {
    return (
      <>
        <input ref={ref} className={classNames(className)} {...props} />
      </>
    );
  }
);

Input.displayName = "Input";
