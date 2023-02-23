import { IIcon } from "@/interfaces";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size: "sm" | "md";
  bg: "dark" | "green" | "white" | "green";
  shadow?: "blue";
  icon: FC<IIcon>;
}
