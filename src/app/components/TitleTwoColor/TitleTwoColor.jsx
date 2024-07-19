import React from 'react'
// Styles
import {DescBold, DescWrap, Title, TitleSec, Wrapper} from "./TitleTwoColor.styles"
const TitleTwoColor = ({title="",titleSec="",desc="",boldDesc=""}) => {
  return (
    <Wrapper className='title-two-wrap'>
      <Title className="titleModal">
        {title} <TitleSec className={"redTitleModal"}>{titleSec}</TitleSec>
      </Title>
      <DescWrap className='desc'>
        {desc}
        <DescBold>{boldDesc}</DescBold>
      </DescWrap>
    </Wrapper>
  );
}

export default TitleTwoColor