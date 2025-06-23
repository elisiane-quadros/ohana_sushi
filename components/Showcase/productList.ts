import { Product } from '@/interfaces/Product';
import { comboList } from './comboList';
import { portionList } from './portionList';
import { pokesList } from './pokesList';
import { yakisobaList } from './yakisobaList';
import { megaHotList } from './megaHotList';
import { temakiList } from './temakiList';

const productList: Product[] = [
  ...comboList.sort((a, b) => a.order - b.order),
  ...portionList.sort((a, b) => a.order - b.order),
  ...pokesList.sort((a, b) => a.order - b.order),
  ...yakisobaList.sort((a, b) => a.order - b.order),
  ...megaHotList.sort((a, b) => a.order - b.order),
  ...temakiList.sort((a, b) => a.order - b.order),
];

export default productList;
