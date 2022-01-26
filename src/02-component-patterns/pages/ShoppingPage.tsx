import Img from "../../coffee-mug.png";
import ProductCard, {
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: Img,
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hola Mundo " />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButton />
        </ProductCard>
      </div>
    </div>
  );
};
