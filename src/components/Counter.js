import { useState } from "react";
import PriceInput from "./PriceInput";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const name = "Banana";
  const price = 2.99;

  const handlePlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handleMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count >= 0) {
        return count;
      } else {
        return prevCount;
      }
    });
  };

  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
      <br />
      <br />
      <PriceInput price={price}></PriceInput>
      <h3>{`Discount: ${discount}%`}</h3>
    </>
  );
}
export default Counter;
