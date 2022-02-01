import { useEffect, useRef, useState } from "react"
import { Product, onChangeAgs } from '../interfaces/interfaces';


interface Props {
         product: Product;
         onChange?: (args: onChangeAgs) => void;
         value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: Props) => {
         const [counter, setCounter] = useState<number>(value);

         const isControlled = useRef(!!onChange);



         const increaseBy = (value: number) => {

                  if (isControlled.current) {
                           return onChange!({ count: value, product })
                  }

                  const newValue = Math.max(counter + value, 0);

                  setCounter(newValue);

                  onChange && onChange({ count: newValue, product });
         };

         useEffect(() => {
                  setCounter(value)
         }, [value]);


         return {
                  counter, increaseBy,
         }
}