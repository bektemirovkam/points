import React from "react";
import { Card } from "../../components";
import ActivityList from "../../components/ActivityList/ActivityList";
import { IActivityItem } from "../../components/ActivityList/ActivityList.props";
import { CardProps } from "../../components/Card/Card.props";
import styles from "./ActivityPage.module.scss";

const activities: IActivityItem[] = [
  {
    type: "instagram",
    title: "Instagram: (likes, comments, post)",
    points: 365,
  },
  {
    type: "telegram",
    title: "Telegram: (discussions, comments)",
    points: 365,
  },
  {
    type: "twitter",
    title: "Twitter: (twits, like, comments)",
    points: 365,
  },
  {
    type: "discord",
    title: "Discord:",
    points: 365,
  },
];

const cards: CardProps[] = [
  {
    count: 55544,
    title: "Promotions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    children: <ActivityList activities={activities} />,
    className: styles.grid__item_1,
  },
  {
    count: 55544,
    title: "Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    className: styles.grid__item_2,
  },
  {
    count: 55544,
    title: "Make video about F55",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    className: styles.grid__item_3,
  },
  {
    count: 544,
    title: "Promotions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    className: styles.grid__item_4,
  },
  {
    count: 544,
    title: "Make contents",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    className: styles.grid__item_5,
  },
  {
    count: 544,
    title: "Buy NFT`s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    className: styles.grid__item_6,
  },
  {
    count: 544,
    title: "Stake your tokens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  aliquip ex ea commodo consequat.",
    btnColor: "blue",
    btnText: "Will be available later",
    className: styles.grid__item_7,
  },
  {
    count: 544,
    title: "Perpetual bug bounty",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  aliquip ex ea commodo consequat.",
    btnColor: "green",
    btnText: "Will be available later",
    className: styles.grid__item_8,
  },
];

const ActivityPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Total points:
        <span> 555444</span>
      </h1>
      <div className={styles.grid}>
        {cards.map((card, index) => {
          return <Card {...card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ActivityPage;
