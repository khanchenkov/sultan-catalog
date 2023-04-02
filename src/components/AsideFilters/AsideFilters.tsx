import "./AsideFilters.scss";
import { useState, FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Product } from "../../types/Interfaces";

interface IAsideFilters {
  setCurrentCareType: any;
  careTypes: string[];
  currentCareType: string;
  currentMinPrice: string;
  currentMaxPrice: string;
  setCurrentMaxPrice: any;
  setCurrentMinPrice: any;
  currentBrands: string[];
  setCurrentBrands: any;
}

interface IBrandObj {
  [key: string]: number;
}

const AsideFilters: FC<IAsideFilters> = ({
  careTypes,
  currentCareType,
  setCurrentCareType,
  currentMaxPrice,
  currentMinPrice,
  setCurrentMaxPrice,
  setCurrentMinPrice,
  currentBrands,
  setCurrentBrands,
}) => {
  const { products } = useAppSelector((state) => state.productReducer);
  const [showAllBrands, setShowAllBrands] = useState<boolean>(false);
  const [searchBrandValue, setSearchBrandValue] = useState<string>("");

  const collectBrands = () => {
    const brandsObj = {} as IBrandObj;
    products.forEach((item: Product) => {
      if (brandsObj[item.brand_name]) {
        brandsObj[item.brand_name] = brandsObj[item.brand_name] + 1;
      } else {
        brandsObj[item.brand_name] = 1;
      }
    });

    return Object.entries(brandsObj);
  };

  const typeCareButtonHandler = (careType: string) => {
    if (careType === currentCareType) {
      setCurrentCareType("");
    } else {
      setCurrentCareType(careType);
    }
  };

  const filterBrands = (arr: [string, number][], searchText: string) => {
    if (searchText === "") {
      return arr;
    }
    return arr.filter((item: [string, number]) =>
      item[0].toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const allBrands = filterBrands(collectBrands(), searchBrandValue);
  const addBrandToList = (e: any, brand: string) => {
    if (e.target.checked) {
      setCurrentBrands((state: string[]) => [...state, brand]);
    } else {
      setCurrentBrands((state: string[]) => state.filter((el) => el !== brand));
    }
  };

  return (
    <aside className="aside-filters">
      <h3>Подбор по параметрам</h3>

      <div className="aside-filters__price">
        <span>
          Цена <b>₸</b>
        </span>
        <div>
          <input
            type="text"
            placeholder="0"
            value={currentMinPrice}
            onChange={(e) => setCurrentMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            type="text"
            placeholder="10 000"
            value={currentMaxPrice}
            onChange={(e) => setCurrentMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="aside-filters__manufacturer-filter manufacturer-filter">
        <h4>Производитель</h4>
        <div className="manufacturer-filter__search-input">
          <input
            type="text"
            placeholder="Поиск..."
            value={searchBrandValue}
            onChange={(e) => setSearchBrandValue(e.target.value)}
          />
          <button>
            <svg
              width={19}
              height={19}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.53 16.53l-3.431-3.437 3.43 3.436zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0v0z"
                stroke="#fff"
                strokeWidth={1.3}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="manufacturer-filter__list">
          <ul>
            {allBrands.map((item, i) => (
              <li key={i} className={i > 3 && !showAllBrands ? "hidden" : ""}>
                <input
                  type="checkbox"
                  onChange={(e) => addBrandToList(e, item[0])}
                />
                <span>{item[0]}</span>
                <span>({item[1]})</span>
              </li>
            ))}
          </ul>
          {allBrands.length > 4 && (
            <button
              className={showAllBrands ? "clicked" : ""}
              onClick={() => setShowAllBrands(!showAllBrands)}
            >
              Показать все
            </button>
          )}
        </div>
      </div>

      <div className="aside-filters__caretype">
        <h4>Тип ухода</h4>
        <ul>
          {careTypes.map((item, i) => (
            <li key={i} className={currentCareType === item ? "active" : ""}>
              <button onClick={() => typeCareButtonHandler(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AsideFilters;
