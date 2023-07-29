import React from "react";
import "./assets/scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Pizza from "./components/Pizza/Pizza";
import Skeleton from "./components/shared/Skeleton";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://64c0064d0d8e251fd111d86b.mockapi.io/items`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  React.useEffect(() => {
    if (items.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [items, isLoading]);

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
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
      </main>
    </div>
  );
}

export default App;
