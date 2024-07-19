import React from 'react'
import {FormWrap, InputAndLabelWrapper, LabelStyle, SelectStyle} from "./FormAccount.styles"
import { useAppState } from '../../hooks/useForm';
import { useForm } from 'react-hook-form';
import {useLocation, useNavigate} from 'react-router-dom';
import { GOOGLE_FORM_DETAILS } from '../../router/router-path';



const FormAccount = () => {


  const navigate = useNavigate();
   const [state, setState] = useAppState();

   const { handleSubmit, register,    formState: { errors },
   } = useForm({ defaultValues: {
    ads_account: state?.form?.ads_account || "",
   }, mode: "onSubmit" });

   console.log(state, "state formaccount")

    const saveData = (data) => {
       console.log(data, "data")
      setState((prev)=>({...prev, form:{...state.form, ...data},step:1 }));
      navigate(GOOGLE_FORM_DETAILS);
    };
    console.log(state?.idData, 66666)


  return (
    <FormWrap onSubmit={handleSubmit(saveData)}>
      <InputAndLabelWrapper>
        <LabelStyle htmlFor="googleAdsAccounts">
          Google Ads Accounts *
        </LabelStyle>
        {errors.ads_account?.message ? (
          <p className="error-msg">{errors.ads_account.message}</p>
        ) : null}
        <SelectStyle
          name="googleAdsAccounts"
          id="googleAdsAccounts"
          {...register("ads_account", { required: "Google Ads Accounts is Required" })}
          defaultValue={"Please select"}
        >
            <option value="" disabled hidden>Please select</option>
            {/* <option value="opt1">Option1</option>
            <option value="opt2">Option2</option> */}
            {state?.idData?.map((option, index) => (  
                <option key={index} 
                  value={option}
                >
                    {option}
                </option>
            ))}
        </SelectStyle>
      </InputAndLabelWrapper>
      <button type="submit" className="redButtonStyle">
        Next
      </button>
    </FormWrap>
  );
}

export default FormAccount