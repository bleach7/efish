import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface ILink extends LinkProps {
  children: ReactNode;
  className?: string;
  appearance?: "link" | "button";
  size?: "sm" | "bg";
  bg?: "dark" | "blue" | "white" | "green";
  shadow?: "blue";
  icon?: keyof JSX.IntrinsicElements | any;
}
