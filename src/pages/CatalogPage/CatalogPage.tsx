import CareTypePanel from "../../components/CareTypePanel/CareTypePanel";
import CategorySort from "../../components/CategorySort/CategorySort";
import AsideFilters from "../../components/AsideFilters/AsideFilters";
import ProductList from "../../components/ProductList/ProductList";
import "./CatalogPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Product } from "../../types/Interfaces";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";

const CatalogPage = () => {
  const { products, careTypes } = useAppSelector(
    (state) => state.productReducer
  );
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [currentCareType, setCurrentCareType] = useState<string>("");
  const [currentMinPrice, setCurrentMinPrice] = useState<string>("");
  const [currentMaxPrice, setCurrentMaxPrice] = useState<string>("");
  const [currentBrands, setCurrentBrands] = useState<string[]>([]);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const filterByCareType = (arr: Product[], careType: string) => {
    if (careType === "") {
      return arr;
    }
    return arr.filter((el) => el.care_type.includes(careType) && el);
  };
  const filterByPrice = (
    arr: Product[],
    minPrice: string,
    maxPrice: string
  ) => {
    const min = minPrice === "" ? "0" : minPrice;
    const max = maxPrice === "" ? "10000" : maxPrice;
    const [moreThan, lessThan] = [Number(min), Number(max)];
    return arr.filter(({ price }) => price > moreThan && price < lessThan);
  };
  const filterByBrands = (arr: Product[], brands: string[]) => {
    if (!brands.length) {
      return arr;
    }
    return arr.filter(({ brand_name }) => brands.includes(brand_name));
  };

  const filteredByCareType = filterByCareType(productsList, currentCareType);
  const filteredByPrice = filterByPrice(
    filteredByCareType,
    currentMinPrice,
    currentMaxPrice
  );
  const filteredByBrands = filterByBrands(filteredByPrice, currentBrands);

  return (
    <>
      <Header />
      <Breadcrumbs routes={["Каталог"]} />
      <CategorySort />
      <CareTypePanel
        setCurrentCareType={setCurrentCareType}
        careTypes={careTypes}
        currentCareType={currentCareType}
      />
      <main className="catalog-content">
        <div className="container">
          <div className="catalog-content__wrapper">
            <AsideFilters
              setCurrentCareType={setCurrentCareType}
              careTypes={careTypes}
              currentCareType={currentCareType}
              currentMinPrice={currentMinPrice}
              currentMaxPrice={currentMaxPrice}
              setCurrentMaxPrice={setCurrentMaxPrice}
              setCurrentMinPrice={setCurrentMinPrice}
              currentBrands={currentBrands}
              setCurrentBrands={setCurrentBrands}
            />
            <ProductList products={filteredByBrands} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;
