import Img from "../../coffee-mug.png";
import ProductCard, {
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

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
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            title="Hola Mundo "
            className="text-white text-bold"
            activeClass="active"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" activeClass="active" />
          <ProductButton className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
            boxShadow: "10px 10px 10px rgba(0,0,0,2)",
          }}
        >
          <ProductImage />
          <ProductTitle
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
          <ProductButton
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
