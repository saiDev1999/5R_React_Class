import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
// import SettingScreen from "../screens/setting-screen";
import InvalidScreen from "../screens/invalid-screen";
import ProductDetail from "../screens/product-detail-screen";
import DoctorScreen from "../screens/doctor-screen";
import EngineerScreen from "../screens/engineer-screen";
// import LazySetting = React.lazy(()=>import("../screens/setting-screen"))
const LazySetting = React.lazy(() => import("../screens/setting-screen"));

function Stack() {
  return (
    <BrowserRouter>
      <Routes>
        {/* static routing */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />}>
          <Route path="doctors" element={<DoctorScreen />} />
          <Route path="engineers" element={<EngineerScreen />} />
        </Route>
        <Route
          path="/setting"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <LazySetting />
            </Suspense>
          }
        />

        <Route path="/:category/:productId/info" element={<ProductDetail />} />

        <Route path="*" element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Stack;
