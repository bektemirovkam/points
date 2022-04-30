import React, { FC, useEffect } from "react";
import cn from "classnames";
import { CSSTransition } from "react-transition-group";

import { ModalProps } from "./Modal.props";

import styles from "./Modal.module.scss";

//TODO: focus visible
//TODO: закрытие модального окна

const getScrollWidth = () => {
  let div = document.createElement("div");

  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  return scrollWidth;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  closeModal,
  className,
  children,
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      const scrollWidth = getScrollWidth();
      document.body.classList.add("modal-open");
      document.body.style.paddingRight = `${scrollWidth}px`;
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = `0 px`;
    };
  }, [isOpen]);

  const handleClickBackDrop = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (!target.closest(".modal")) {
      closeModal();
    }
  };

  return (
    <CSSTransition in={isOpen} timeout={250} classNames="alert" unmountOnExit>
      <div className={styles.backdrop} onClick={handleClickBackDrop}>
        <div className={cn(styles.content, className, "modal")} {...props}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
