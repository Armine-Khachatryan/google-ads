import React from 'react'
// Styles
import {Wrapper} from "./KeyMetrics.styles"

// Images
import infoIcon from "../../assets/images/info.png"
import NegativeNumber from '../NegativeNumber';
const KeyMetrics = () => {
  return (
    <Wrapper>
      <div className='key-metrics-wrap'>
        <h3>KEY METRICS</h3>
      <div className="metrics-costs">
        <div className="metrics-costs-item">
          <div className="metrics-price">
            <img src={infoIcon} width={24} height={24} alt="info" />
            <p>$45.99</p>
          </div>
          <h6>Your Projected Wasted Costs</h6>
          <p>NEXT 12 MONTHS</p>
        </div>
        <div className="metrics-costs-item">
          <div className="metrics-price">
            <img src={infoIcon} width={24} height={24} alt="info" />
            <p>$45.99</p>
          </div>
          <h6>Your Projected Wasted Costs</h6>
          <p>NEXT 12 MONTHS</p>
        </div>
      </div>

      </div>
      <NegativeNumber />
    </Wrapper>
  );
}

export default KeyMetrics