import React from "react";
import Steppers from "../Stepper/Stepper";
import TitleTwoColor from "../TitleTwoColor/TitleTwoColor";
const FormStep = () => {
  return (
    <>
      <TitleTwoColor
        title="choose an"
        titleSec="account"
        desc="Which Google Ads account would you like to grade today?"
      />
      <Steppers />
    </>
  );
};

export default FormStep;
