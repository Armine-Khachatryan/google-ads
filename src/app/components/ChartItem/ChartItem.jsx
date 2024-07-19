import React from 'react'
// Styles
import {Wrapper} from "./ChartItem.styles"
const ChartItem = ({title, desc, chart, colorMode='dark'}) => {
  return (
    <Wrapper colorMode={colorMode}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="canvas-wrap">{chart}</div>
    </Wrapper>
  );
}

export default ChartItem