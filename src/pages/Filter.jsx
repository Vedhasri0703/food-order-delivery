import React, { useState } from "react";
import { useOrder } from "../context/OrderContext";
import OrderCard from "../components/OrderCard";

const Filter = () => {
  const { orders } = useOrder();
  const [query, setQuery] = useState("");

  const filtered = orders.filter(o => 
    o.restaurant.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        data-testid="filter-input"
        placeholder="Filter by restaurant..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="list">
        {filtered.map(o => <OrderCard key={o.orderId} order={o} />)}
      </div>
    </div>
  );
};
export default Filter;