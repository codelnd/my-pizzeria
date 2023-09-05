import React from "react";
import s from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";

const Search = () => {
  return (
    <>
      <img src={searchIcon} />
      <input className={s.search} type="search" placeholder="Введите пиццу" />
    </>
  );
};

export default Search;
