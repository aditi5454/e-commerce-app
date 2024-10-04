import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import About from "./pages/home/components/about";
import ProductList from "./pages/product-list";
import ProductDetails from "./pages/product-details";
import CartPage from "./pages/cart-page";
import PaymentPage from "./pages/payment";
import OrderPlaced from "./pages/order-placed";
import OrderFailed from "./pages/order-failed";
import CartAddress from "./pages/cart-address";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-list/:productType" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/order-failed" element={<OrderFailed />} />
        <Route path="/cart-address" element={<CartAddress />} />
        <Route
          path="/product-list/:productName/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
