import React from "react";
import s from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={s.container}>
      <h1>Такой страницы не существует</h1>
      <button className="button button--outline button--add">Назад</button>
    </div>
  );
};

export default NotFound;
