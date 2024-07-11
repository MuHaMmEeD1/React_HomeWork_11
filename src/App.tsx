import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ProductsShop from "./components/ProductsShop/ProductsShop";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <ProductsShop />
    </>
  );
}

export default App;
