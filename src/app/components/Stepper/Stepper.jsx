import React, { useEffect, useState } from "react";

import { CheckIcon, DisableIcon, RadiosIcon } from "../Icons/Icons";
import { StepsWrap } from "./Stepper.styled";
import { useAppState } from "../../hooks/useForm";

const StepIcon = ({ completed, active }) => {
  return completed ? <CheckIcon /> : active ? <RadiosIcon /> : <DisableIcon />;
};
const StepItem = ({ step }) => {
  const { completed, active, name } = step;
  return (
    <div className="step-icon">
      <StepIcon completed={completed} active={active} />
      <p>{name}</p>
    </div>
  );
};
const steps = [
  {
    name: "Google Account",
    completed: false,
    active: true,
   
  },
  { name: "Your Details", completed: false, active: false },
  { name: "Business Details", completed: false, active: false },
];

export default function Steppers() {
  const [stepsValue, setStepsValue] = useState(steps);
  const [state] = useAppState();

  useEffect(() => {
    if (state?.step === 0) {
      setStepsValue(steps);
    }
    if (state?.step === 1) {
      setStepsValue([
        {
          name: "Google Account",
          completed: true,
          active: false,
        },
        { name: "Your Details", completed: false, active: true },
        { name: "Business Details", completed: false, active: false },
      ]);
      
    }
     if (state?.step === 2) {
       setStepsValue([
         {
           name: "Google Account",
           completed: true,
           active: false,
         },
         { name: "Your Details", completed: true, active: false },
         { name: "Business Details", completed: false, active: true },
       ]);
     }
  }, [state]);
  return (
    <StepsWrap>
      {stepsValue.map((step, idx) => {
        return (
          <div key={idx} className="step-item">
            <StepItem step={step} />
            {steps.length - 1 !== idx ? (
              <p className={`step-line ${step.completed ? "active" : ""}`}></p>
            ) : null}
          </div>
        );
      })}
    </StepsWrap>
  );
}
