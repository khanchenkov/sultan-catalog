import { FC } from "react";
import "./Pagination.scss";

interface IPagination {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  setCurrentPage: any;
}

const Pagination: FC<IPagination> = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  const maxPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage((prev: number) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev: number) => prev - 1);
    }
  };

  return (
    <div className="pagintaion">
      <button onClick={prevPage}>
        <svg
          width={9}
          height={16}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 2.286L3.375 8 9 13.714 7.875 16 0 8l7.875-8L9 2.286z"
            fill="#FFC85E"
          />
        </svg>
      </button>
      <ul>
        {pageNumbers.map((item) => (
          <li key={item}>
            <button
              className={currentPage === item ? "active" : ""}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage}>
        <svg
          width={9}
          height={16}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13.714L5.625 8 0 2.286 1.125 0 9 8l-7.875 8L0 13.714z"
            fill="#FFC85E"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
