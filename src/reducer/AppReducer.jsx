const OrderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case "ADD_ORDER":
      return { ...state, orders: [action.payload, ...state.orders] };
    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((o) => o.orderId !== action.payload),
      };
    case "UPDATE_STATUS":
      return {
        ...state,
        orders: state.orders.map((o) =>
          o.orderId === action.payload.id ? { ...o, status: action.payload.status } : o
        ),
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        orders: state.orders.map((o) =>
          o.orderId === action.payload ? { ...o, favorite: !o.favorite } : o
        ),
      };
    default:
      return state;
  }
};
export default OrderReducer;