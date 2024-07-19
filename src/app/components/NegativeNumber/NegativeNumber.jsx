import React, { useState } from 'react'
// Styles
import {Wrapper} from "./NegativeNumber.styles"
import CustomSelect from '../CustomSelect/CustomSelect';
import ChartNegative from '../ChartNegative/ChartNegative';

//  Images
import infoGray from "../../assets/images/infoGray.png";
import infoYellow from "../../assets/images/infoYellow.png";
const NegativeNumber = () => {
   const [options, setOptions] = useState([
     {
       label: "Last 30 Days",
       value: "30",
     },
     {
       label: "Option 2",
       value: "opt2",
     },
     {
       label: "Option 3",
       value: "opt3",
     },
   ]);
    const handleChangeSelect = (e) => {
      console.log(e);
    };
  return (
    <Wrapper>
      <div>
        <div className="select-wrap">
          <p>Number of Negative Keywords Added</p>
          <CustomSelect
            options={options}
            placeHolder="Please select..."
            onChange={(e) => handleChangeSelect(e)}
          />
        </div>
      </div>
      <ChartNegative />

      <div className="info-negative">
        <div className="info-negative-item">
          <div className="info-negative-item-block">
            <img src={infoGray} alt="info-gray" />
            <div>
              <h6>
                Based on your demogrpahic results during the past 30 days:
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="info-negative-item-block wrong">
            <img src={infoYellow} alt="info-yellow" />
            <div>
              <h6>
                Based on your demogrpahic results during the past 30 days:
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default NegativeNumber