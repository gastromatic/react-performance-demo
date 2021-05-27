import React, { Profiler } from "react";
import PerformanceDisplay from "./PerformanceDisplay";
import "./App.css";
import Fibonacci from "./fibonacci";

const data: any = {};

const parseRenderInfo = (
  id: string,
  phase: "mount" | "update",
  actualDuration: number
) => {
  data[id] = [...(data[id] || []), actualDuration];
  console.log(`${id}:\t${phase}\t-\t${actualDuration.toFixed(5)}ms`);
};

function App() {
  return (
    <Profiler id="Entire App" onRender={parseRenderInfo}>
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <Profiler id={"Fibonacci Component"} onRender={parseRenderInfo}>
              <Fibonacci />
            </Profiler>
          </div>
          <div className="col">
            <Profiler id={"Performance Component"} onRender={parseRenderInfo}>
              <PerformanceDisplay />
            </Profiler>
          </div>
        </div>
      </div>
    </Profiler>
  );
}

export default App;
