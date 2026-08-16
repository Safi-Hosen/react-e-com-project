import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Header from "./header";
import AuthProvider from "./auth-context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./pages/CartContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
