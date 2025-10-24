import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layout/MainLayout";
import FallBackUI from "./components/local/loaders/fallBackUI/FallBackUI";
const Home = lazy(() => import("./pages/homepage/Home"));
const About = lazy(() => import("./pages/about/About"));
const Products = lazy(() => import("./pages/products/Products"));
const Product = lazy(() => import("./pages/product/Product"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Suspense fallback={<FallBackUI />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
