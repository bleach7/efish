import { ReactNode } from "react";

export interface IHeading {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  path?: string;
  name?: string;
  uppecase?: boolean;
  line?: boolean;
}
