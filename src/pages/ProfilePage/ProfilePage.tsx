import React, { useState } from "react";
import cn from "classnames";

import { CSSTransition } from "react-transition-group";

import { Button, MyDataForm, MySocialForm } from "../../components";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<"data" | "social">("data");

  const selectMyData = () => setActiveTab("data");
  const selectMySocial = () => setActiveTab("social");

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Profile</h1>
      <div className={styles.tabs}>
        <Button
          appearance="transparent"
          className={cn(styles.tabsBtn, {
            [styles.active]: activeTab === "data",
          })}
          onClick={selectMyData}
        >
          My data
        </Button>
        <Button
          appearance="transparent"
          className={cn(styles.tabsBtn, {
            [styles.active]: activeTab === "social",
          })}
          onClick={selectMySocial}
        >
          My social account
        </Button>
      </div>
      <CSSTransition
        in={activeTab === "data"}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <MyDataForm className={styles.form} />
      </CSSTransition>
      <CSSTransition
        in={activeTab === "social"}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <MySocialForm className={styles.form} />
      </CSSTransition>
    </div>
  );
};

export default ProfilePage;
