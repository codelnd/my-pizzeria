import React from "react";
import "./assets/scss/app.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartPage from "./pages/CartPage/CartPage";

export const SortContext = React.createContext<Object | null>(null);

function App() {
  const [items, setItems] = React.useState([]);
  const categoriesOfSort = ["rating", "price", "title"];
  const [activeInd, setActiveInd] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  // const onSetActiveInd = (i) => {
  //   setActiveInd(i);
  //   fetch(
  //       `https://64c0064d0d8e251fd111d86b.mockapi.io/items?sortBy=${categoriesOfSort[selectedCategory]}&category=${activeInd}&order=asc`
  //   )
  //       .then((res) => res.json())
  //       .then((data) => setItems(data));
  // };

  const onSetCategoryAndSort = (category, i, setIsOpen) => {
    setActiveInd(i);
    setSelectedCategory(category);
    // setIsOpen(false);
    fetch(
      `https://64c0064d0d8e251fd111d86b.mockapi.io/items?sortBy=${categoriesOfSort[category]}&category=${activeInd}&order=asc`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  return (
    <SortContext.Provider
      value={{
        items,
        setItems,
        activeInd,
        setActiveInd,
        categoriesOfSort,
        selectedCategory,
        setSelectedCategory,
        onSetCategoryAndSort,
      }}
    >
      <div className="wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </SortContext.Provider>
  );
}

export default App;
