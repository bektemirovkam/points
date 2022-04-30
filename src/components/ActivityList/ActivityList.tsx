import React, { FC } from "react";
import cn from "classnames";

import styles from "./ActivityList.module.scss";
import { ActivityListProps } from "./ActivityList.props";

import { ReactComponent as DiscordIcon } from "./icons/discord_icon.svg";
import { ReactComponent as TelegramIcon } from "./icons/telegram_icon.svg";
import { ReactComponent as TwitterIcon } from "./icons/twitter_icon.svg";
import { ReactComponent as InstagramIcon } from "./icons/inst_icon.svg";

const icons = {
  instagram: <InstagramIcon />,
  telegram: <TelegramIcon />,
  twitter: <TwitterIcon />,
  discord: <DiscordIcon />,
};

const ActivityList: FC<ActivityListProps> = ({ activities, className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <span className={styles.title}>You activity:</span>
      <ul className={styles.list}>
        {activities.map((activity) => (
          <li key={activity.title}>
            <div className={styles.text}>
              {icons[activity.type]}
              <span>{activity.title}</span>
            </div>
            <span>{activity.points} points</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
