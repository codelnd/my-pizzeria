import React from "react";
import Index from "../../components/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import Skeleton from "../../components/shared/Skeleton";
import { SortContext } from "../../App";

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { items, setItems, activeInd, categoriesOfSort, selectedCategory } =
    React.useContext(SortContext);

  React.useEffect(() => {
    fetch(`https://64c0064d0d8e251fd111d86b.mockapi.io/items`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    // document.body.scrollIntoView({
    //   block: "start",
    //   behavior: "smooth",
    // });
    window.scrollBy(0, 0);
  }, []);

  React.useEffect(() => {
    fetch(
      `https://64c0064d0d8e251fd111d86b.mockapi.io/items?category=${activeInd}&sortBy=${categoriesOfSort[selectedCategory]}&order=asc`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [activeInd, selectedCategory]);

  return (
    <div className="container">
      <div className="content__top">
        <Index />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items.map((el) => <Pizza key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default HomePage;
