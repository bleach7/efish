import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IWaveContainer
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
