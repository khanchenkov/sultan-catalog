import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "../util/ScrollToTop";
import CatalogPage from "./CatalogPage/CatalogPage";
import CartPage from "./CartPage/CartPage";
import ProductPage from "./ProductPage/ProductPage";
import AdminPage from "./AdminPage/AdminPage";

const Pages = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:barcode" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/catalog" replace />} />
      </Routes>
    </Router>
  );
};

export default Pages;
