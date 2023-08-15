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

  return (
    <SortContext.Provider value={{ items, setItems }}>
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
