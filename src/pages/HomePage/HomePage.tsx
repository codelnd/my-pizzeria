import React from "react";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort";
import Pizza from "../../components/Pizza";
import Skeleton from "../../components/shared/Skeleton";

export const SortContext = React.createContext<Object | null>(null);

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    title: "популярности убыв.",
    type: "-rating",
  });

  React.useEffect(() => {
    const baseUrl = `https://64c0064d0d8e251fd111d86b.mockapi.io/items`;
    const category = categoryId !== 0 ? categoryId : "";
    const typeReplaced = sortType.type.replace("-", "");
    const typeNegative = sortType.type.includes("-") ? "desc" : "asc";
    setIsLoading(true);
    fetch(
      `${baseUrl}?category=${category}&sortBy=${typeReplaced}&order=${typeNegative}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    // window.scrollBy(0, 0);
    document.body.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, [categoryId, sortType]);

  return (
    <SortContext.Provider
      value={{
        sortType,
        onSetSortType: (type) => setSortType(type),
      }}
    >
      <div className="container">
        <div className="content__top">
          <Categories
            categoryId={categoryId}
            onSetActiveCategory={(id) => setCategoryId(id)}
          />
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
