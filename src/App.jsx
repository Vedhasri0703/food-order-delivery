import "./App.css";
import AppRouter from "./routers/AppRouter";
import { OrderProvider } from "./context/OrderContext";

const App = () => (
  <OrderProvider>
    <AppRouter />
  </OrderProvider>
);
export default App;