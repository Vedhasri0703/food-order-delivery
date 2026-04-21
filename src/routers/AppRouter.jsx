import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderStats from "../components/OrderStats";
import Filter from "../pages/Filter";
import Orders from "../pages/Orders.jsx";

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