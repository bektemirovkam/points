import React, { FC } from "react";
import cn from "classnames";

import styles from "./TextField.module.scss";
import { TextFieldProps } from "./TextField.props";

const Input: FC<TextFieldProps> = ({
  className,
  placeholder,
  type,
  ref,
  maxlength,
  value,
  onChange,
  title,
  ...props
}) => {
  return (
    <div className={cn(styles.input_box, className)}>
      <span>{title}</span>
      <input
        {...props}
        placeholder={placeholder}
        type={type}
        maxLength={maxlength}
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
