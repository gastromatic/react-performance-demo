import { FunctionComponent, useMemo } from "react";
import fib from "./fib";
import styled from "styled-components";

type FibonacciCardProps = {
  num: string;
};

const StyledFibonacciCard = styled.div`
  border-radius: 4px;
  background-color: #efefef;
  padding: 8px;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
`;

const FibonacciCard: FunctionComponent<FibonacciCardProps> = ({ num }) => {
  const start = window.performance.now();

  const res = useMemo(() => fib(parseInt(num)), [num]);

  const diff = window.performance.now() - start;

  return (
    <StyledFibonacciCard>
      <span>
        <b>Input</b>: {num}
      </span>
      <span>
        <b>Result</b>: {res}
      </span>
      <span>
        <b>Calculation time</b>: {diff.toFixed(6)}ms
      </span>
    </StyledFibonacciCard>
  );
};

export default FibonacciCard;
