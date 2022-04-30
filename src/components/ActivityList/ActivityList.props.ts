import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IActivityItem {
  type: "instagram" | "telegram" | "twitter" | "discord";
  title: string;
  points: number | string;
}

export interface ActivityListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activities: IActivityItem[];
}
