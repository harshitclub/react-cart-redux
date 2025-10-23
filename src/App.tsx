import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
