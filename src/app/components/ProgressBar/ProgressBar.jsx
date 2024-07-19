import React, { useCallback, useEffect, useState } from "react";
// Styles
import { ProgressWrap} from "./ProgressBar.styles";
import { useNavigate } from "react-router-dom";
import { OVERALL_RESULTS } from "../../router/router-path";
const ProgressBar = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const navigate = useNavigate()
  const maxValue = 100;

  const increment = useCallback(() => {
    if (currentValue === 100) {
      // setCurrentValue(0);
      navigate(OVERALL_RESULTS)
    } else {
      setCurrentValue((v) => v + 10);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCurrentValue, currentValue]);

  useEffect(() => {
    const r = setInterval(() => {
      increment();
    }, 1500);

    return () => {
      clearInterval(r);
    };
  }, [increment]);

  return (
    <ProgressWrap>
      <progress value={currentValue} max={maxValue}>
        {currentValue}%
      </progress>
      <p>{currentValue}%</p>
    </ProgressWrap>
  );
};

export default ProgressBar;
