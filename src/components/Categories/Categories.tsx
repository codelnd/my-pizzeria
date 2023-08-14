import React from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeInd, setActiveInd] = React.useState(0);

  const onSetActiveInd = (i) => {
    setActiveInd(i);
    fetch(`https://64c0064d0d8e251fd111d86b.mockapi.io/items?category=3`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="categories">
      <ul>
        {categories.map((el, i) => {
          return (
            <li
              key={i}
              onClick={() => onSetActiveInd(i)}
              className={activeInd === i ? "active" : ""}
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
