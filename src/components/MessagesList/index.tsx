import React from "react";
import s from "./styles.module.scss";
import Message from "../Message";
import { compareAsc } from "date-fns";
import { Message as MessageType } from "../../types/form";

interface MessagesListProps {
  messages: MessageType[];
}

const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
  return (
    <div className={s.messages}>
      {messages
        .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
        .map((message) => (
          <Message
            date={message.date}
            fromMe={message.fromMe}
            text={message.text}
            key={message.id}
            audio={message.audio}
          />
        ))}
    </div>
  );
};

export default MessagesList;
