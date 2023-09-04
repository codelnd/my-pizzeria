import React from "react";
import s from "./Search.module.scss";

const Search = () => {
  return (
    <>
      <input className={s.search} type="search" placeholder="Введите пиццу" />
    </>
  );
};

export default Search;
