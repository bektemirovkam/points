import React, { FC } from "react";
import cn from "classnames";

import styles from "./NavMenu.module.scss";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as UserIcon } from "./icons/user_icon.svg";
import { NavMenuProps } from "./NavMenu.props";
import Button from "../Button/Button";

const NavMenu: FC<NavMenuProps> = () => {
  return (
    <div className={cn(styles.menu, "navmenu")}>
      <Button className={styles.toggler} appearance="darkBlue">
        <UserIcon />
        <span>Василий Пупкин</span>
        <ArrowIcon />
      </Button>
    </div>
  );
};

export default NavMenu;
