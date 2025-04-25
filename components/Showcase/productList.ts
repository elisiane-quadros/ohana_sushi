import { Product } from '@/interfaces/Product';
import example from '../../public/images/teste2.png';

const productList: Product[] = [
  {
    id: 1,
    title: 'Combo Hot Família',
    image: example,
    price: 119.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'hot camarão empanado',
        quantity: 10,
      },
      {
        id: 2,
        name: 'hot alho poró',
        quantity: 10,
      },
      {
        id: 3,
        name: 'hot cove',
        quantity: 10,
      },
      {
        id: 4,
        name: 'hot doritos',
        quantity: 10,
      },
      {
        id: 5,
        name: 'hot cheddar',
        quantity: 10,
      },
      {
        id: 6,
        name: 'hot geleia de pimenta',
        quantity: 10,
      },
      {
        id: 7,
        name: 'hot saladi',
        quantity: 10,
      },
    ],
  },
  {
    id: 2,
    title: 'Combo Temaki',
    image: example,
    price: 149.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'temaki saladi com geleia de pimenta',
        quantity: 2,
      },
      {
        id: 2,
        name: 'temaki skin salmão com tare',
        quantity: 2,
      },
      {
        id: 3,
        name: 'Temaki hot',
        quantity: 2,
      },
      {
        id: 4,
        name: 'temaki Filadélfia',
        quantity: 2,
      },
    ],
  },
  {
    id: 3,
    title: 'Combo Hot',
    image: example,
    price: 59.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'hot camarão Alho e óleo',
        quantity: 10,
      },
      {
        id: 2,
        name: 'hot alho poró',
        quantity: 10,
      },
      {
        id: 7,
        name: 'hot saladi',
        quantity: 10,
      },
    ],
  },
  {
    id: 4,
    title: 'Combo Ohana',
    image: example,
    price: 99.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    title: 'Combo Hot Família',
    image: example,
    price: 119.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'hot camarão empanado',
        quantity: 10,
      },
      {
        id: 2,
        name: 'hot alho poró',
        quantity: 10,
      },
      {
        id: 3,
        name: 'hot cove',
        quantity: 10,
      },
      {
        id: 4,
        name: 'hot doritos',
        quantity: 10,
      },
      {
        id: 5,
        name: 'hot cheddar',
        quantity: 10,
      },
      {
        id: 6,
        name: 'hot geleia de pimenta',
        quantity: 10,
      },
      {
        id: 7,
        name: 'hot saladi',
        quantity: 10,
      },
    ],
  },
  {
    id: 6,
    title: 'Combo Temaki',
    image: example,
    price: 149.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'temaki saladi com geleia de pimenta',
        quantity: 2,
      },
      {
        id: 2,
        name: 'temaki skin salmão com tare',
        quantity: 2,
      },
      {
        id: 3,
        name: 'Temaki hot',
        quantity: 2,
      },
      {
        id: 4,
        name: 'temaki Filadélfia',
        quantity: 2,
      },
    ],
  },
  {
    id: 7,
    title: 'Combo Hot',
    image: example,
    price: 59.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'hot camarão Alho e óleo',
        quantity: 10,
      },
      {
        id: 2,
        name: 'hot alho poró',
        quantity: 10,
      },
      {
        id: 7,
        name: 'hot saladi',
        quantity: 10,
      },
    ],
  },
  {
    id: 8,
    title: 'Combo Ohana',
    image: example,
    price: 99.9,
    type: 'COMBO',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
  {
    id: 9,
    title: 'Porção 1',
    image: example,
    price: 99.9,
    type: 'PORTION',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
  {
    id: 10,
    title: 'Porção 2',
    image: example,
    price: 99.9,
    type: 'PORTION',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
  {
    id: 11,
    title: 'Porção 3',
    image: example,
    price: 99.9,
    type: 'PORTION',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
  {
    id: 12,
    title: 'Porção 4',
    image: example,
    price: 99.9,
    type: 'PORTION',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
  {
    id: 13,
    title: 'Porção 5',
    image: example,
    price: 99.9,
    type: 'PORTION',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
  {
    id: 14,
    title: 'Porção 6',
    image: example,
    price: 99.9,
    type: 'PORTION',
    ingredientList: [
      {
        id: 1,
        name: 'lâminas',
        quantity: 12,
      },
      {
        id: 2,
        name: 'nigueris salmão',
        quantity: 4,
      },
      {
        id: 3,
        name: 'gunkan fila',
        quantity: 2,
      },
      {
        id: 4,
        name: 'ura fila',
        quantity: 8,
      },
      {
        id: 5,
        name: 'hosso fila',
        quantity: 8,
      },
      {
        id: 6,
        name: 'hot',
        quantity: 10,
      },
      {
        id: 7,
        name: 'temaki fila',
        quantity: 1,
      },
    ],
  },
];

export default productList;
