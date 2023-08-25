import React from "react";
import { SortContext } from "../../pages/HomePage/HomePage";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const { categoryId, setCategoryId } = React.useContext(SortContext);

  const onSetActiveCategory = (i) => {
    setCategoryId(i);
  };

  return (
    <section className="categories">
      <ul>
        {categories.map((el, i) => {
          return (
            <li
              key={i}
              onClick={() => onSetActiveCategory(i)}
              className={categoryId === i ? "active" : ""}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
