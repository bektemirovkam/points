import React, { FC } from "react";
import cn from "classnames";
import { CSSTransition } from "react-transition-group";

import { ModalProps } from "./Modal.props";

import styles from "./Modal.module.scss";

const Modal: FC<ModalProps> = ({
  isOpen,
  closeModal,
  className,
  children,
  ...props
}) => {
  return (
    <CSSTransition in={isOpen} timeout={250} classNames="fade" unmountOnExit>
      <div className={cn(styles.backdrop, "modal")} onClick={closeModal}>
        <div className={cn(styles.content, className)} {...props}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
