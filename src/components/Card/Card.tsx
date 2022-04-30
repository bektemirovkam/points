import React, { FC } from "react";
import cn from "classnames";

import { CardProps } from "./Card.props";

import styles from "./Card.module.scss";
import Button from "../Button/Button";

const Card: FC<CardProps> = ({
  className,
  children,
  title,
  count,
  description,
  btnColor = "pink",
  btnText = "Learn more",
  ...props
}) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.points}>
          <span>{count}</span>
          <span>points</span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      {children}
      <Button appearance={btnColor}>{btnText}</Button>
    </div>
  );
};

export default Card;
