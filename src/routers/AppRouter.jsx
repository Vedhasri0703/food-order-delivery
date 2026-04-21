import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Orders from "../pages/Orders"; // Your Home/List page
import OrderStats from "../components/OrderStats";
import Filter from "../pages/Filter";

const AppRouter = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<OrderStats />} />
        <Route path="/" element={<Orders />} />
        <Route path="/orders/:id" element={<Orders />} />
      </Routes>
    </MainLayout>
  </Router>
);
export default AppRouter;