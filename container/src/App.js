import React from "react";
import { BrowserRouter } from "react-router-dom";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
