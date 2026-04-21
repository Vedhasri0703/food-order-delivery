export const OrderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, orders: action.payload, loading: false };
    
    case "MARK_DELIVERED":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload && order.status !== "Delivered"
            ? { ...order, status: "Delivered" }
            : order
        ),
      };

    default:
      return state;
  }
};