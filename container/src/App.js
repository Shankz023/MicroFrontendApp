import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
//Mount function to start up the app
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}