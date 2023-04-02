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
