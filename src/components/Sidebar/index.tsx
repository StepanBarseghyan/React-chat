import React from "react";
import s from "./styles.module.scss";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <div className={s.header}></div>
      <div className={s.searchBar}></div>
      <div className={s.dialogs}></div>
    </aside>
  );
};

export default Sidebar;
