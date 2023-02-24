import { ReactNode } from "react";

export interface IHeading {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  path?: string;
  name?: string;
  uppecase?: boolean;
  line?: boolean;
}
