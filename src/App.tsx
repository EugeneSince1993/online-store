import { Routes, Route } from "react-router-dom";
import { Header, Footer, CartEmpty } from "./components";
import { Home, Product, Cart } from "./pages";

function App() {
  return (
    <>
      <Header />
      <div className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devices/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/empty-cart" element={<CartEmpty />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
