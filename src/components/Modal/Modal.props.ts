import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  closeModal: () => void;
  isOpen: boolean;
}
