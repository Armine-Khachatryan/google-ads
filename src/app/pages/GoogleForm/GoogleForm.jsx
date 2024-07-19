import React from "react";
import { Wrapper } from "./GoogleForm.styles";
import FormStep from "../../components/FormStep/FormStep";
import { Outlet, useLocation } from "react-router-dom";

const GoogleForm = () => {

    // const { state } = useLocation();
    // console.log(state?.user, "state GoogleForm")
  return (
    <Wrapper>
      <FormStep />
      <Outlet/>
    </Wrapper>
  );
};

export default GoogleForm;
