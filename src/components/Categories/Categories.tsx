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

  const onChangeCategory = (i: number) => {
    setActiveInd(i);
  };

  return (
    <section className="categories">
      <ul>
        {categories.map((el, i) => {
          return (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
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

// <ul>
// <li
//     onClick={() => onChangeCategory(0)}
//     className={activeIndex === 0 ? "active" : ""}
// >
//   Все
// </li>
// <li
//     onClick={() => onChangeCategory(1)}
//     className={activeIndex === 1 ? "active" : ""}
// >
//   Мясные
// </li>
// <li
//     onClick={() => onChangeCategory(2)}
//     className={activeIndex === 2 ? "active" : ""}
// >
//   Вегетарианская
// </li>
// <li
//     onClick={() => onChangeCategory(3)}
//     className={activeIndex === 3 ? "active" : ""}
// >
//   Гриль
// </li>
// <li
//     onClick={() => onChangeCategory(4)}
//     className={activeIndex === 4 ? "active" : ""}
// >
//   Острые
// </li>
// <li
//     onClick={() => onChangeCategory(5)}
//     className={activeIndex === 5 ? "active" : ""}
// >
//   Закрытые
// </li>
// </ul>
