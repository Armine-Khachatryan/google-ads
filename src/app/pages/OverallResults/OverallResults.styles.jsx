import styled from "styled-components";

export const Wrapper = styled.section`
  background: #edf0f0;
  text-align: center;

  & .title-two-wrap {
    padding-top: 95px;
    padding-bottom: 60px;
  }
  & .desc {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    margin-top: 16px;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1150px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  justify-content: space-between;
  column-gap: 32px;
  row-gap: 60px;
  padding-bottom: 60px;
`;

export const StaticDate = styled.div`
  background: #2C343A;
  padding: 69px 0;

`;
