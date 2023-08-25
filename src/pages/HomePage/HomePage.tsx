import React from "react";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza";
import Skeleton from "../../components/shared/Skeleton";

export const SortContext = React.createContext<Object | null>(null);

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [activeInd, setActiveInd] = React.useState(0);
  const categoriesOfSort = ["rating", "price", "title"];
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  // const { items, setItems, activeInd, categoriesOfSort, selectedCategory } =
  //   React.useContext(SortContext);

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
    <SortContext.Provider
      value={{
        activeInd,
        setActiveInd,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <div className="container">
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
      </div>
    </SortContext.Provider>
  );
};

export default HomePage;
