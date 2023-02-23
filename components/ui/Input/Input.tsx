import classNames from "classnames";
import { forwardRef } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className, ...props }, ref) => {
    return <input className={classNames(className)} ref={ref} {...props} />;
  }
);

Input.displayName = "Input";
