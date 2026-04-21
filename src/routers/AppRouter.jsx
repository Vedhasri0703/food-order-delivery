import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderStats from "../components/OrderStats";
import Filter from "../pages/Filter";
import Orders from "../pages/Orders";
import NavBar from "../components/NavBar"; // Assuming you have a NavBar component

const AppRouter = () => (
  <Router>
    <NavBar /> {/* This replaces MainLayout */}
    <main>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<OrderStats />} />
        <Route path="/" element={<Orders />} />
        <Route path="/orders/:id" element={<Orders />} />
      </Routes>
    </main>
  </Router>
);

export default AppRouter;