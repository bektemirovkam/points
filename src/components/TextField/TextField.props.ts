import {
  ChangeEvent,
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
} from "react";

export interface TextFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  maxlength?: number;
  placeholder?: string;
}
