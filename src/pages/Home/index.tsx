import React from "react";
import s from "./styles.module.scss";
import classNames from "classnames";
import Sidebar from "../../components/Sidebar";
import Message from "../../components/Message";
import MessagesList from "../../components/MessagesList";
import { FaCircle } from "react-icons/fa";
import { Message as MessageType } from "../../types/form";

const messages: MessageType[] = [
  {
    id: 1,
    audio:
      "https://actions.google.com/sounds/v1/human_voices/man_laugh_and_knee_slap.ogg?hl=ru",
    fromMe: false,
    date: new Date(),
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate ab molestiae sint, iusto soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate ab molestiae sint, iusto soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate ab molestiae sint, iusto soluta.",
    fromMe: false,
    date: new Date(Date.now() - 60 * 60 * 1000),
  },
  {
    id: 3,
    audio:
      "https://actions.google.com/sounds/v1/cartoon/hitting_a_woodblock.ogg",
    fromMe: true,
    date: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    fromMe: false,
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    fromMe: true,
    date: new Date(),
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate ab molestiae sint, iusto soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate ab molestiae sint, iusto soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate ab molestiae sint, iusto soluta.",
    fromMe: true,
    date: new Date(Date.now() - 60 * 60 * 1000),
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    fromMe: true,
    date: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    fromMe: false,
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

const Home = () => {
  return (
    <section className={s.home}>
      <Sidebar />
      <div className={s.content}>
        <div className={s.user}>
          <h4>John Wick</h4>
          <p>
            <span>
              <FaCircle />
            </span>{" "}
            online
          </p>
        </div>
        <MessagesList messages={messages} />
      </div>
    </section>
  );
};

export default Home;
