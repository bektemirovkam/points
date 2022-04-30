import React, { FC } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as UserIcon } from "./icons/user_icon.svg";
import { NavbarProps } from "./Navbar.props";
import Button from "../Button/Button";

const links = [
  {
    title: "My NFT`s",
    to: "/nft",
  },
  {
    title: "Activity",
    to: "/",
  },
  {
    title: "Profile",
    to: "/profile",
  },
  {
    title: "Logout",
    to: "/logout",
  },
];

const Navbar: FC<NavbarProps> = ({
  username,
  isOpen,
  toggleNavbar,
  className,
  closeNavbar,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.navbar, "navbar", className)} {...props}>
        <Button
          className={cn(styles.toggler, {
            [styles.focused]: isOpen,
          })}
          appearance="darkBlue"
          onClick={toggleNavbar}
          block
        >
          <UserIcon />
          <span>{username}</span>
          <ArrowIcon />
        </Button>
        {isOpen && (
          <ul className={cn(styles.menu, "menu")}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(styles.link, {
                      [styles.activeLink]: isActive,
                    })
                  }
                  onClick={closeNavbar}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
