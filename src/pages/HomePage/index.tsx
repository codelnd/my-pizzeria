import React from "react";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import Skeleton from "../../components/shared/Skeleton";

const Index = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://64c0064d0d8e251fd111d86b.mockapi.io/items`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items.map((el) => <Pizza key={el.id} {...el} />)}
      </div>
    </>
  );
};

export default Index;
