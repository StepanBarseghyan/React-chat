import React from "react";
import s from "./styles.module.scss";
import classNames from "classnames";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { ru } from "date-fns/locale";
import AudioMessage from "../AudioMessage";

interface MessageProps {
  // avatar: string;
  text?: string;
  fromMe: boolean;
  date: Date;
  audio?: string;
}

const Message: React.FC<MessageProps> = ({ fromMe, text, date, audio }) => {
  const timeSince = formatDistanceToNow(new Date(date), {
    locale: ru,
    addSuffix: true,
  });
  return (
    <div className={classNames(s.message, { [s.myMessage]: fromMe })}>
      <div className={s.content}>
        <div className={s.avatar}></div>
        <div className={classNames(s.textBox, { [s.audioWrapper]: audio })}>
          {audio ? (
            <AudioMessage audioUrl={audio} />
          ) : (
            <p className={s.text}>{text}</p>
          )}
        </div>
      </div>
      <p className={s.date}>{timeSince}</p>
    </div>
  );
};

export default Message;
