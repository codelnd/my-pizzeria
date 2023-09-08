import React from "react";
import "./assets/scss/app.scss";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartPage from "./pages/CartPage/CartPage";

export const SortContext = React.createContext<Object | null>(null);

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
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
  );
}

export default App;
