import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

const StyledPerformanceDisplayWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: lavender;
  display: flex;
  align-items: center;
  padding: 16px;
  font-weight: bold;
`;

const PerformanceDisplay: FunctionComponent = () => {
  const [lastChanged, setLastChanged] = useState<Date>();

  useEffect(() => {
    let observer = new MutationObserver(() => {
      setLastChanged(new Date());
    });

    observer.observe(document.getRootNode(), {
      childList: true, // observe direct children
      subtree: true, // and lower descendants too,
      attributes: true,
      characterData: true,
    });
  }, []);

  return (
    <StyledPerformanceDisplayWrapper>
      DOM last change: {lastChanged ? lastChanged.toLocaleString() : ""}
    </StyledPerformanceDisplayWrapper>
  );
};

export default PerformanceDisplay;
