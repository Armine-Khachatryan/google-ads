import React from 'react'
// Styles
import {Content, Wrapper} from "./OverallFooter.styles"
import { ShareIcon } from '../Icons/Icons'
const OverallFooter = () => {
  return (
    <Wrapper>
      <Content>
       <h2>
        OVERALL <span>GRADE</span>
       </h2>
       <div className='found-wrap'>
        <div className="box-found">
          <h5>24/100</h5>
          <h6>FOUNDATIONAL</h6>
          <p>February 7, 2024</p>
        </div>
        <div className='footer-btn'>
          <button className='share-btn'>
            <ShareIcon />
            <span>Share Report</span>
          </button>
          <button className='check-btn'>Check for New Score</button>
        </div>
       </div>
      </Content>
    </Wrapper>
  )
}

export default OverallFooter