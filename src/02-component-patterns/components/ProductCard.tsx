import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";

import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={coffe} />
      <ProductTitle title={product.title} />
      <ProductButton counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButton;
