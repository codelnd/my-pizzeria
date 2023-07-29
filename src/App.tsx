import React from "react";
import "./assets/scss/app.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
