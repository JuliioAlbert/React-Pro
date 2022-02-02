import ProductCard, {
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/product";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <hr />

      <ProductCard
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, reset, increaseBy, maxCount, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductButton
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />

            <button
              onClick={reset}
              style={{
                width: "100%",
                backgroundColor: "red",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Reset
            </button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}

            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
