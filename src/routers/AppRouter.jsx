import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Orders from "../pages/Orders";
import OrderDetail from "../pages/OrderDetail";
import Filter from "../pages/Filter";
import Stats from "../pages/Stats";

const AppRouter = () => (
  <Router>
    <nav className="navbar">
      <NavLink to="/orders">All Orders</NavLink>
      <NavLink to="/filter">Filter</NavLink>
      <NavLink to="/stats">Dashboard</NavLink>
    </nav>
    <main>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/" element={<Orders />} />
      </Routes>
    </main>
  </Router>
);
export default AppRouter;