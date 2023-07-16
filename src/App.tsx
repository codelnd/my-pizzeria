import "./assets/scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Pizza from "./components/Pizza/Pizza";
import items from "./utils/db.json";

function App() {
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
            {items.map((el) => {
              return (
                <Pizza
                  key={el.id}
                  title={el.title}
                  price={el.price}
                  photo={el.imageUrl}
                  sizes={el.sizes}
                  types={el.types}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
