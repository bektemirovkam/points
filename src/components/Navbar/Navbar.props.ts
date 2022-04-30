import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NavbarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  username: string;
  isOpen: boolean;
  toggleNavbar: () => void;
  closeNavbar: () => void;
}
