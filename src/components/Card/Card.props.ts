import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count: number | string;
  title: string;
  description: string;
  btnColor?: "pink" | "darkBlue" | "green" | "blue" | "transparent";
  btnText?: string;
}
