import React, { useEffect, useState } from "react";
import {
  FormWrap,
  InputAndLabelWrapper,
  InputStyle,
  LabelStyle,
} from "../FormAccount/FormAccount.styles";
import {
  GOOGLE_FORM_ACCOUNT,
  GOOGLE_FORM_BUSINESS,
} from "../../router/router-path";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../hooks/useForm";
import { useScrollTrigger } from "@mui/material";



const FormDetails = () => {
  const [state, setState] = useAppState();

  console.log(state, "formDetailsState")
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: state?.userData?.given_name || "",
      last_name: state?.userData?.family_name || "",
      phone: state?.form?.phone || "",
      // first_name: state?.form?.first_name || "",
      // last_name: state?.form?.last_name || "",
      // phone: state?.form?.phone || "",
    },
    mode: "onSubmit",
  });
  
  const saveData = (data) => {
    console.log(data, "form details")
    setState((prev)=>({...prev, form: { ...state.form, ...data }, step: 2 }));
    navigate(GOOGLE_FORM_BUSINESS);
  };
  useEffect(() => {
    // debugger;
    if (state.step === 0 || !state.step) {
      navigate(GOOGLE_FORM_ACCOUNT);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <FormWrap onSubmit={handleSubmit(saveData)}>
      <InputAndLabelWrapper>
        <LabelStyle htmlFor="googleAdsAccounts">First Name *</LabelStyle>
        {errors.first_name?.message ? (
          <p className="error-msg">{errors.first_name.message}</p>
        ) : null}
        <InputStyle
          name="googleAdsAccounts"
          id="googleAdsAccounts"
          {...register("first_name", {
            required: "First Name Required",
          })}
          placeholder="John"
        />
      </InputAndLabelWrapper>
      <InputAndLabelWrapper>
        <LabelStyle htmlFor="googleAdsAccounts">Last Name *</LabelStyle>
        {errors.last_name?.message ? (
          <p className="error-msg">{errors.last_name.message}</p>
        ) : null}
        <InputStyle
          name="googleAdsAccounts"
          id="googleAdsAccounts"
          {...register("last_name", { required: "Last Name Required" })}
          placeholder="Doe"
        />
      </InputAndLabelWrapper>
      <InputAndLabelWrapper>
        <LabelStyle htmlFor="googleAdsAccounts">Phone *</LabelStyle>
        {errors.phone?.message ? (
          <p className="error-msg">{errors.phone.message}</p>
        ) : null}
        <InputStyle
          name="googleAdsAccounts"
          id="googleAdsAccounts"
          type="number"
          {...register("phone", {
            required: "Phone Required",
            valueAsNumber: true,
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
            },
          })}
          placeholder="*** *** ****"
        />
      </InputAndLabelWrapper>
      <button type="submit" className="redButtonStyle">
        Next
      </button>
    </FormWrap>
  );
};

export default FormDetails;
