import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Basket from "./pages/Basket";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
