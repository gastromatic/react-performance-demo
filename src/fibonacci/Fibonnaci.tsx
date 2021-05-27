import { FunctionComponent, useState } from "react";
import FibonacciCard from "./FibonacciCard";
import FibonacciForm from "./FibonacciForm";

const Fibonacci: FunctionComponent = () => {
  const [nums, setNums] = useState<string[]>([]);

  const onSubmit = (num: string) => {
    setNums([...nums, ...num.split(",").map((str) => str.trim())]);
  };

  return (
    <div>
      <h1>The super amazing Fibonacci Calculator</h1>
      <FibonacciForm onSubmit={onSubmit} />
      {nums.map((num, i) => (
        <FibonacciCard num={num} key={i} />
      ))}
    </div>
  );
};

export default Fibonacci;
