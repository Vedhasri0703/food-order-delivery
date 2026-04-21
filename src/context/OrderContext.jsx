import { createContext, useContext, useReducer, useEffect } from "react";
import OrderReducer from "../reducer/OrderReducer.jsx";
import { getToken, getDataset } from "../api/api";

const initialState = {
  orders: [],
  loading: true,
};

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  useEffect(() => {
    const initApp = async () => {
      try {
        const tokenRes = await getToken(
          "E0323043",
          "207933",
          "SETA"
        );
        const data = await getDataset(tokenRes.token, tokenRes.dataUrl);
        dispatch({ type: "SET_ORDERS", payload: data });
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };
    initApp();
  }, []);

  return (
    <OrderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);