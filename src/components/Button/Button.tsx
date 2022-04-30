import React, { FC } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  children,
  appearance = "pink",
  block,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.pink]: appearance === "pink",
        [styles.darkBlue]: appearance === "darkBlue",
        [styles.green]: appearance === "green",
        [styles.blue]: appearance === "blue",
        [styles.transparent]: appearance === "transparent",
        [styles.block]: block,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
