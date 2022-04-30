import React, { FC } from "react";
import cn from "classnames";

import styles from "./MySocialForm.module.scss";
import { MySocialFormProps } from "./MySocialForm.props";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

const MySocialForm: FC<MySocialFormProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.alert}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <TextField title="Telegram:" className={styles.input} />
      <div className={styles.addition}>
        <TextField
          className={cn(styles.input, styles.additionField)}
          title="Twitter:"
        />
        <Button className={styles.additionBtn}>Add twitter</Button>
      </div>
      <div className={styles.addition}>
        <TextField
          className={cn(styles.input, styles.additionField)}
          title="Instagram:"
        />
        <Button className={styles.additionBtn}>Add instagram</Button>
      </div>
      <div className={styles.addition}>
        <TextField
          className={cn(styles.input, styles.additionField)}
          title="Discord:"
        />
        <Button className={styles.additionBtn}>Add discord</Button>
      </div>
    </div>
  );
};

export default MySocialForm;
