import React, { useEffect, useState } from "react";
import axios from "axios";
import {subIndustryAnimals, subIndustryApparelFashion, subIndustryArtsEntertainment,subIndustryAttorneys} from '../../components/OptionData1.jsx';
import {subIndustryAutomotiveSale, subIndustryAutomotiveRepair} from '../../components/OptionData2.jsx';
import {subIndustryBeautyPersonalCare,subIndustryBusinessOpportunities, subIndustryBusinessServices} from '../../components/OptionData3';
import {subIndustryCareerEmployment, subIndustryCommunityGarageSales, subIndustryComputersTelephony,
  subIndustryDentistsDentalServices,subIndustryEducationInstruction,subIndustryElectronicsPhoto,
  subIndustryFarmingAgriculture} from '../../components/OptionData4.jsx';
import {subIndustryFinanceInsurance, subIndustryFurniture, subIndustryGovernmentPolitics, subIndustryHealthFitness,
  subIndustryHomeHomeImprovement} from '../../components/OptionData5';
import {subIndustryIndustrialCommercial,
   subIndustryPersonalServices, 
   subIndustryPhysiciansSurgeons,
  subIndustryRealEstate,subIndustryReligion, subIndustryRestaurantsFood, subIndustryShopping, subIndustrySports,
  subIndustryToysHobbies, subIndustryTravel} from '../../components/OptionData6';
// Styles

import {
  FormWrap,
  InputAndLabelWrapper,
  InputStyle,
  LabelStyle,
  SelectStyle,
} from "../FormAccount/FormAccount.styles";
import {
  GOOGLE_FORM_ANALYZING,
  GOOGLE_FORM_BUSINESS,
} from "../../router/router-path";
import { useForm } from "react-hook-form";
import { useAppState } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";



const FormBusiness = () => {

  const [state, setState] = useAppState();
  const navigate = useNavigate();

  console.log(state, "state formbusiness")

  const {
    handleSubmit,
    register,getValues, setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      business_name: state?.form?.business_name || "",
      // industry: state?.form?.industry || "",
      sub_industry: state?.form?.sub_industry || "",
    },
    mode: "onSubmit",
  });
  console.log('errors :', errors);
  const [subIndustryOptions, setSubIndustryOptions] = useState([]);
  const [industryOptions, setIndustryOptions]=useState(state?.form?.industryOptions || "")



  const saveData = (data) => {
    console.log(data, "data")
      setState({ form: { ...state.form, ...data, industry:industryOptions}, step: 3 });
      sendData({ ...state.form, ...data, industry:industryOptions});
    console.log(data, "data business part")
   
  };

  useEffect(() => {
    if (state.step === 1 || !state.step) {
      navigate(GOOGLE_FORM_BUSINESS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);



  let sendData=async(info)=>{
    try{
      // let response =await axios.patch('http://159.203.75.35:8000/auth/user/',info,
      let response =await axios.patch('https://adsadmin.freniklabs.com/auth/user/',info,
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
        console.log(response.data, "reposnse final")
        navigate(GOOGLE_FORM_ANALYZING);
      } catch (error) {
          console.log(error, "error")
        }
      }

  
 
  console.log(subIndustryOptions, "s5dslkdlsk")
  console.log(industryOptions, "industryOption");

  const handleIndustryChange = (event) => {
    setSubIndustryOptions(null);
    const selectedIndustry =event.target.value;
    if (selectedIndustry) {
      delete errors.industry
    }
  
    console.log(event, "event")
    setIndustryOptions(selectedIndustry);
    setValue("sub_industry", "");
    // Set sub-industry options based on the selected industry
    switch (selectedIndustry) {
      case "animals_pets":
      
        setSubIndustryOptions(subIndustryAnimals);
        break;
      case "apparel":
        setSubIndustryOptions(subIndustryApparelFashion);
        break;
      case "arts_entertainment":
        setSubIndustryOptions(subIndustryArtsEntertainment);
        break;
      case "attorneys":
        setSubIndustryOptions(subIndustryAttorneys);
        break;
      case "automotive_sale": 
        setSubIndustryOptions(subIndustryAutomotiveSale);
          break;   
      case "automotive_repair":
        setSubIndustryOptions(subIndustryAutomotiveRepair);
          break; 
      case "beauty_personal_care":
        setSubIndustryOptions(subIndustryBeautyPersonalCare);
          break;  
      case "business_opportunities":
        setSubIndustryOptions(subIndustryBusinessOpportunities);
          break;  
      case "business_services":
        setSubIndustryOptions(subIndustryBusinessServices);
          break;  
      case "career_employment":
        setSubIndustryOptions(subIndustryCareerEmployment);
          break;   
      case "community_garage_sales":
        setSubIndustryOptions(subIndustryCommunityGarageSales);
          break;   
      case "computers_telephony_internet":
        setSubIndustryOptions(subIndustryComputersTelephony);
         break; 
      case "dentists_dental_services":
       setSubIndustryOptions(subIndustryDentistsDentalServices);
          break;   
      case "education_instruction":
        setSubIndustryOptions(subIndustryEducationInstruction);
         break;  
      case "electronics_photo":
        setSubIndustryOptions(subIndustryElectronicsPhoto);
          break;  
      case "farming_agriculture":
        setSubIndustryOptions(subIndustryFarmingAgriculture);
        break;
      case "finance_insurance":
        setSubIndustryOptions(subIndustryFinanceInsurance);
        break;             
      case "furniture":
        setSubIndustryOptions(subIndustryFurniture);
        break;   
      case "government_politics":
        setSubIndustryOptions(subIndustryGovernmentPolitics);
        break;  
      case "health_fitness":
        setSubIndustryOptions(subIndustryHealthFitness);
         break;   
      case "home_and_home_improvement":
        setSubIndustryOptions(subIndustryHomeHomeImprovement);
        break;
      case "industrial_commercial":
         setSubIndustryOptions(subIndustryIndustrialCommercial);
        break;
     case "personal_services":
        setSubIndustryOptions(subIndustryPersonalServices);
        break;
      case "physicians_surgeons":
        setSubIndustryOptions(subIndustryPhysiciansSurgeons);
        break;
      case "real_estate":
        setSubIndustryOptions(subIndustryRealEstate);
        break;
      case "religion_spirituality":
        setSubIndustryOptions(subIndustryReligion);
        break;
      case "restaurants_food":
        setSubIndustryOptions(subIndustryRestaurantsFood);
         break;
      case "shopping_collectibles_gifts":
       setSubIndustryOptions(subIndustryShopping);
        break;
      case "sports_recreation":
        setSubIndustryOptions(subIndustrySports);
        break;
      case "toys_hobbies":
        setSubIndustryOptions(subIndustryToysHobbies);
        break;
      case "travel":
        setSubIndustryOptions(subIndustryTravel);
        break;
      default:
        // setSubIndustryOptions([]);
        setSubIndustryOptions([]);

        break;
    }
  };

  console.log(industryOptions, 111111111111)
  

  return (
    <FormWrap onSubmit={handleSubmit(saveData)}>
      <InputAndLabelWrapper>
        <LabelStyle htmlFor="googleAdsAccounts">Business Name *</LabelStyle>
        {errors.business_name?.message ? (
          <p className="error-msg">{errors.business_name.message}</p>
        ) : null}
        <InputStyle
          name="googleAdsAccounts"
          id="googleAdsAccounts"
          {...register("business_name", {
            required: "Business Name Required",
          })}
          placeholder="John"
        />
      </InputAndLabelWrapper>
      <InputAndLabelWrapper>
        <LabelStyle htmlFor="googleAdsAccounts">Industry *</LabelStyle>
        {errors.industry?.message ? (
          <p className="error-msg">{errors.industry.message}</p>
        ) : null}
        <select className="selectStyling" 
        
        {...register("industry", {
          required: "Industry Accounts is Required",
        })}
        onChange={handleIndustryChange}  
        value={industryOptions || ""} 
        >
          <option value="" disabled hidden>
            Please select
          </option>
          <option value="animals_pets">Animals & Pets</option>
          <option value="apparel">Apparel / Fashion & Jewelry</option>
          <option value="arts_entertainment">Arts & Entertainment</option>
          <option value="attorneys">Attorneys & Legal Services</option>
          <option value="automotive_sale">Automotive -- For Sale</option>
          <option value="automotive_repair">Automotive -- Repair, Service & Parts</option>
          <option value="beauty_personal_care">Beauty & Personal Care</option>
          <option value="business_opportunities">Business Opportunities</option>
          <option value="business_services">Business Services</option>
          <option value="career_employment">Career & Employment</option>
          <option value="community_garage_sales">Community, Garage Sales & Organizations</option>
          <option value="computers_telephony_internet">Computers, Telephony & Internet</option>
          <option value="dentists_dental_services">Dentists & Dental Services</option>
          <option value="education_instruction">Education & Instruction</option>
          <option value="electronics_photo">Electronics & Photo</option>
          <option value="farming_agriculture">Farming & Agriculture</option>
          <option value="finance_insurance">Finance & Insurance</option>
          <option value="furniture">Furniture</option>
          <option value="government_politics">Government & Politics</option>
          <option value="health_fitness">Health & Fitness</option>
          <option value="home_and_home_improvement">Home & Home Improvement</option>
          <option value="industrial_commercial">Industrial & Commercial</option>
          <option value="personal_services">Personal Services (Weddings, Cleaners, etc.)</option>
          <option value="physicians_surgeons">Physicians & Surgeons</option>
          <option value="real_estate">Real Estate</option>
          <option value="religion_spirituality">Religion & Spirituality</option>
          <option value="restaurants_food">Restaurants & Food</option>
          <option value="shopping_collectibles_gifts">Shopping, Collectibles & Gifts (General)</option>
          <option value="sports_recreation">Sports & Recreation</option>
          <option value="toys_hobbies">Toys & Hobbies</option>
          <option value="travel">Travel</option>
        </select>
        {/* <SelectStyle
          name="googleAdsAccounts"
          id="googleAdsAccounts"
          {...register("industry", {
            required: "Industry Accounts is Required",
          })}
          defaultValue={"Please select"}
          onChange={handleIndustryChange}
        >
          <option value="" disabled hidden>
            Please select
          </option>
          <option value="animals_pets">Animals & Pets</option>
          <option value="apparel">Apparel / Fashion & Jewelry</option>
          <option value="arts_entertainment">Arts & Entertainment</option>
          <option value="attorneys">Attorneys & Legal Services</option>
          <option value="automotive_sale">Automotive -- For Sale</option>
          <option value="automotive_repair">Automotive -- Repair, Service & Parts</option>
          <option value="industry3">Beauty & Personal Care</option>
          <option value="industry4">Business Opportunities</option>
          <option value="industry1">Business Services</option>
          <option value="industry2">Career & Employment</option>
          <option value="industry3">Community, Garage Sales & Organizations</option>
          <option value="industry4">Computers, Telephony & Internet</option>
          <option value="industry4">Dentists & Dental Services</option>
          <option value="industry4">Education & Instruction</option>
          <option value="industry4">Electronics & Photo</option>
          <option value="industry4">Farming & Agriculture</option>
          <option value="industry4">Finance & Insurance</option>
          <option value="industry4">Furniture</option>
          <option value="industry4">Government & Politics</option>
          <option value="industry4">Health & Fitness</option>
          <option value="industry4">Home & Home Improvement</option>
          <option value="industry4">Industrial & Commercial</option>
          <option value="industry4">Personal Services (Weddings, Cleaners, etc.)</option>
          <option value="industry4">Physicians & Surgeons</option>
          <option value="industry4">Real Estate</option>
          <option value="industry4">Religion & Spirituality</option>
          <option value="industry4">Restaurants & Food</option>
          <option value="industry4">Shopping, Collectibles & Gifts (General)</option>
          <option value="industry4">Sports & Recreation</option>
          <option value="industry4">Toys & Hobbies</option>
          <option value="industry4">Travel</option>
        </SelectStyle> */}
      </InputAndLabelWrapper>
      <InputAndLabelWrapper>
        <LabelStyle htmlFor="googleAdsAccounts">Sub-Industry *</LabelStyle>
        {errors.sub_industry?.message ? (
          <p className="error-msg">{errors.sub_industry.message}</p>
        ) : null}
        <SelectStyle
          name="googleAdsAccounts"
          id="googleAdsAccounts"
          {...register("sub_industry", {
            required: "Sub-Industry is Required",
          })}
          defaultValue={"Please select"}
        >
          <option value="" disabled hidden>
            Please select
          </option>
          {subIndustryOptions?.map((item, index)=>(
    <option value={item.value} key={index}>{item.name}</option>
  ))}
      
          {/* <option value="Sub-Industry1">Sub-Industry 1</option>
          <option value="Sub-Industry2">Sub-Industry 2</option>
          <option value="Sub-Industry3">Sub-Industry 3</option>
          <option value="Sub-Industry4">Sub-Industry 4</option> */}
        </SelectStyle>
      </InputAndLabelWrapper>
      <button type="submit" className="redButtonStyle">
        Next
      </button>
    </FormWrap>
  );
};

export default FormBusiness;
