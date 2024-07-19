import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 544px;
  width: 100%;
  text-align: left;
  h2 {
    font-family: Din_Condensed_Bold !important;
    font-weight: 700;
    font-size: 30px;
    line-height: 107%;
    text-transform: uppercase;
    color: ${(props) => (props.colorMode === "dark" ? "#17242e" : "#fff")};
    margin-bottom: 8px;
  }
  p {
    /* font-family: var(--second-family); */
    font-family: Roboto_Regular;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${(props) => (props.colorMode === "dark" ? "#49525a" : "#D2D4D5")};
    margin-bottom: 16px;
  }
  .canvas-wrap {
    min-height: 250px;
    background-color: #fff;
    border-radius: 20px;
    padding: 15px;
  }
`;
