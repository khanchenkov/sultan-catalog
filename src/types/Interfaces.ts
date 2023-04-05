export interface Product {
  id: number;
  name: string;
  brand_name: string;
  image_url: string;
  measurement_type: string;
  size: string;
  barcode: string;
  manufacturer: string;
  description: string;
  price: number;
  care_type: string[];
}

export interface CartItem {
  product_id: number;
  amount: number;
  item: Product;
}

export interface IHeader {
  cartLength: number;
  cartSum: number;
}

export interface IProductList {
  products: Product[] | undefined;
}

export interface IPagination {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  setCurrentPage: any;
}

export interface ICareTypePanel {
  setCurrentCareType: any;
  careTypes: string[];
  currentCareType: string;
}

export interface IBreadcrumbs {
  routes: string[];
}

export interface IAsideFilters {
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

export interface IBrandObj {
  [key: string]: number;
}

export interface IAdminProduct {
  item: Product;
  removeProduct: (id: number) => void;
  editProductItem: (product: Product) => void;
}

export interface IAddNewProduct {
  addNewProduct: (product: Product) => void;
  lastId: number;
}
