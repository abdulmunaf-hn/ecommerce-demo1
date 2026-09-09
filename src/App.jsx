import { Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/checkout";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Navbar from "./components/navbar";
import AuthProvider from "./context/AuthContext.jsx";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
