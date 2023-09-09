import React from "react";
import s from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";

const Search = () => {
  const onChangeSearchValue = (value) => {
    onSetSearchValue(value);
  };

  return (
    <div className={s.wrapper}>
      <img className={s.icon} src={searchIcon} alt="иконка поиска" />
      <input
        className={s.search}
        type="search"
        placeholder="Введите пиццу..."
        onChange={(e) => onChangeSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
