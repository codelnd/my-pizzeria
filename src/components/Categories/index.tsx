import React from "react";
import { SortContext } from "../../App";

const Index = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const { activeInd, setActiveInd } = React.useContext(SortContext);

  const onSetActiveInd = (i) => {
    setActiveInd(i);
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

export default Index;
