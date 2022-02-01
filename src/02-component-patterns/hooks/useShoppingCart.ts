import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCard) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCard;

        console.log(toDelete);

        return rest;
      }

      return {
        ...oldShoppingCard,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};
