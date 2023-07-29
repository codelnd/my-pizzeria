import React from "react";
import s from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <h1>Такой страницы не существует</h1>
      <button
        onClick={() => navigate(-1)}
        className="button button--outline button--add"
      >
        Назад
      </button>
    </div>
  );
};

export default NotFound;
