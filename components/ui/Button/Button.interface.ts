// import { IIcon } from "@/interfaces";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size: "sm" | "bg";
  bg: "dark" | "blue" | "white" | "green";
  shadow?: "blue";
  icon?: keyof JSX.IntrinsicElements | any;
}
