import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "../util/ScrollToTop";
import CatalogPage from "./CatalogPage/CatalogPage";
import CartPage from "./CartPage/CartPage";
import ProductPage from "./ProductPage/ProductPage";
import AdminPage from "./AdminPage/AdminPage";
//<Route path="*" element={<Navigate to="/catalog" replace />} />

const Pages = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/product/:barcode" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default Pages;
