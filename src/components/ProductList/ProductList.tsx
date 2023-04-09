import ProductListItem from "../ProductListItem/ProductListItem";
import { FC, useState } from "react";
import { Product } from "../../types/Interfaces";
import "./ProductList.scss";
import Pagination from "../Pagination/Pagination";
import { IProductList } from "../../types/Interfaces";

const ProductList: FC<IProductList> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(15);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  const currentProducts = products!.slice(firstProductIndex, lastProductIndex);

  return (
    <div>
      <div className="product-list">
        {!products && <h2>Продуктов нет!</h2>}
        {currentProducts.map((item: Product) => (
            <ProductListItem key={item.id} {...item} />
          ))}
      </div>
      {products!.length > productsPerPage && (
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products!.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProductList;
