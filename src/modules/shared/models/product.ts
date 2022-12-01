export interface Product {
  id: string;
  srcImg: string;
  name: string;
  price: string;
  catId: string;
}

export interface CartProductItem {
  count: number;
  product: Product;
}


