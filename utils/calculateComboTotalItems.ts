import { Ingredient } from '@/interfaces/Ingredient';

const calculateComboTotalItems = (ingredientList: Ingredient[]) => {
  let newTotal = 0;
  ingredientList.map((ing) => {
    newTotal += ing.quantity;
  });

  return newTotal.toString();
};

export default calculateComboTotalItems;
