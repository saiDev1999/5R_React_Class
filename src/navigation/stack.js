import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
import SettingScreen from "../screens/setting-screen";
import InvalidScreen from "../screens/invalid-screen";
import ProductDetail from "../screens/product-detail-screen";

function Stack() {
  return (
    <BrowserRouter>
      <Routes>
        {/* static routing */}
        <Route path="/" Component={HomeScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="/contact" Component={ContactScreen} />
        <Route path="/setting" Component={SettingScreen} />

        <Route path="/:location/:restaurantId/info" Component={ProductDetail} />

        <Route path="*" Component={InvalidScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default Stack;
