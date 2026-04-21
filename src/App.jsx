import "./App.css";
import AppRouter from "./routers/AppRouter";
import OrderProvider from "./context/OrderContext";

function App() {
  return (
    <OrderProvider>
      <AppRouter />
    </OrderProvider>
  );
}
export default App;