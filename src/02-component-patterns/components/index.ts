import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButton } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCPros } from '../interfaces/interfaces';

export { ProductButton } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


const ProductCard: ProductCardHOCPros = Object.assign(ProductCardHOC, {
         Title: ProductTitle,
         Image: ProductImage,
         Buttons: ProductButton
})


export default ProductCard