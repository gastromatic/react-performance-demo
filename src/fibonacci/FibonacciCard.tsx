import { FunctionComponent, useEffect, useState } from "react";
// @ts-ignore
import worker from "workerize-loader!./fib"; // eslint-disable-line import/no-webpack-loader-syntax
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
  const [time, setTime] = useState<number>(0);
  const [result, setResult] = useState();

  useEffect(() => {
    const fibWorker = worker();

    const start = window.performance.now();

    fibWorker.fib(parseInt(num)).then((res: any) => {
      setTime(window.performance.now() - start);
      setResult(res);
    });
  }, [num]);

  if (!result) {
    return (
      <StyledFibonacciCard>
        <div className="spinner-border" role="status" />
      </StyledFibonacciCard>
    );
  }

  return (
    <StyledFibonacciCard>
      <span>
        <b>Input</b>: {num}
      </span>
      <span>
        <b>Result</b>: {result}
      </span>
      <span>
        <b>Calculation time</b>: {time.toFixed(6)}ms
      </span>
    </StyledFibonacciCard>
  );
};

export default FibonacciCard;
