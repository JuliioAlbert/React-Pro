import Img from "../../coffee-mug.png";
import Img2 from "../../coffee-mug2.png";
import { Product } from "../interfaces/interfaces";


const product = {
         id: "1",
         title: "Coffe Mug - Card",
         img: Img,
};
const product2 = {
         id: "2",
         title: "Coffe Mug - Meme",
         img: Img2,
};

export const products: Product[] = [product, product2];