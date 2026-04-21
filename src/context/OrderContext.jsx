import { createContext, useContext, useReducer, useEffect } from "react";
import { OrderReducer } from "../reducer/OrderReducer";
import { getToken, getDataset } from "../api/api";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, { orders: [], loading: true });

  useEffect(() => {
    const initApp = async () => {
      try {
        const auth = await getToken(
          "E0323043",
          "207933", 
          "SETA");
        const data = await getDataset(auth.token, auth.dataUrl);

        const validOrders = data.filter((order) => {
          const hasItems = order.items && order.items.length > 0;
          const validQty = hasItems && order.items.every(i => i.quantity > 0);
          const validPrice = typeof order.totalAmount === "number" && order.totalAmount > 0;
          return hasItems && validQty && validPrice;
        });

        dispatch({ type: "SET_ORDERS", payload: validOrders });
      } catch (err) {
        console.error("Initialization Failed", err);
      }
    };
    initApp();
  }, []);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);