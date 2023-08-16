import React from "react";
import { SortContext } from "../../App";

const Sort = () => {
  const sortCategories = ["популярности", "цене", "алфавиту"];
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    setItems,
    activeInd,
    setSelectedCategory,
    selectedCategory,
    categoriesOfSort,
  } = React.useContext(SortContext);

  const onSetSelectedCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    fetch(
      `https://64c0064d0d8e251fd111d86b.mockapi.io/items?sortBy=${categoriesOfSort[category]}&category=${activeInd}&order=asc`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  return (
    <section className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>
          {sortCategories[selectedCategory]}
        </span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortCategories.map((el, i) => (
              <li
                key={i}
                onClick={() => onSetSelectedCategory(i)}
                className={selectedCategory === i ? "active" : ""}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Sort;
