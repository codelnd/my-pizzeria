import React from "react";
import Categories from "../../components/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza";
import Skeleton from "../../components/shared/Skeleton";

export const SortContext = React.createContext<Object | null>(null);

const HomePage = () => {
  const sortCategories = [
    { title: "популярности", type: "rating" },
    { title: "цене", type: "price" },
    { title: "алфавиту", type: "title" },
  ];
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortTypeId, setSortTypeId] = React.useState(0);

  React.useEffect(() => {
    // let category = categoryId !== 0 ? categoryId : "";
    // let sort = sortTypeId !== 0 ? sortCategories[sortTypeId].type : "";
    let url = `https://64c0064d0d8e251fd111d86b.mockapi.io/items`;
    let category = categoryId;
    let sort = sortCategories[sortTypeId].type;
    setIsLoading(true);
    fetch(`${url}?category=${category}&sortBy=${sort}&order=asc`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    document.body.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    // window.scrollBy(0, 0);
  }, [categoryId, sortTypeId]);

  return (
    <SortContext.Provider
      value={{
        categoryId,
        onSetActiveCategory: (id) => setCategoryId(id),
        sortTypeId,
        onSetSortType: (id) => setSortTypeId(id),
        sortCategories,
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
