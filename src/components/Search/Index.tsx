import React from "react";
import s from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg";
import { Context } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(Context);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <img className={s.icon} src={searchIcon} alt="иконка поиска" />
      <input
        className={s.search}
        type="search"
        placeholder="Введите пиццу..."
        onChange={onChangeSearchValue}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
