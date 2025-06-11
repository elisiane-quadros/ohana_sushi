import { Product } from '@/interfaces/Product';

export interface ProductListByType {
  id: number;
  type: ProductType;
  typeName: string;
  productLists: Product[];
  order: number;
}
