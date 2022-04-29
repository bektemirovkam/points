import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count: number;
  title: string;
  description: string;
  btnColor?: "pink" | "darkBlue" | "green";
}
