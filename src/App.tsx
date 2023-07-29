import React from "react";
import "./assets/scss/app.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
