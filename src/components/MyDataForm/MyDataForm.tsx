import React, { FC, useState } from "react";
import cn from "classnames";

import { MyDataFormProps } from "./MyDataForm.props";
import styles from "./MyDataForm.module.scss";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { ReactComponent as CloseIcon } from "./icons/close_icon.svg";

const MyDataForm: FC<MyDataFormProps> = ({ className, ...props }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className={cn(styles.wrapper, className)} {...props}>
        <TextField className={styles.input} title="Wallet" />
        <div className={styles.email}>
          <TextField
            className={cn(styles.input, styles.emailField)}
            title="E-mail"
            type="email"
          />
          <Button className={styles.emailBtn} onClick={openModal}>
            Change email
          </Button>
        </div>
        <TextField className={styles.input} title="Name" />
        <TextField
          className={cn(styles.input, styles.lastField)}
          title="Last name"
        />
        <Button appearance="green" className={styles.saveBtn} block>
          Save
        </Button>
      </div>
      <Modal
        isOpen={showModal}
        closeModal={closeModal}
        className={styles.modalContent}
      >
        <div className={styles.modalTop}>
          <span>Change e-mail</span>
          <Button
            appearance="transparent"
            className={styles.closeBtn}
            onClick={closeModal}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className={styles.modalForm}>
          <TextField
            title="New e-mail"
            type="email"
            className={styles.modalTextField}
          />
          <Button appearance="green" block>
            Send verification code
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default MyDataForm;
