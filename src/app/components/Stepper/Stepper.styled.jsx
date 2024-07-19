import styled from "styled-components";

export const StepsWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 498px;
  width: 100%;
  gap: 60px;
  justify-content: center;
  width: 100%;
  .step-item {
    text-align: center;
    display: flex;
    align-items: center;
    max-width: 241px;
    position: relative;
    width: 100%;
    justify-content: center;
  }
  .step-icon {
    max-width: 126px;
    width: 100%;
  }
  .step-line {
    max-width: 100px;
    width: 100%;
    position: absolute;
    top: 25%;
    background-color: #d2d4d5;
    height: 2px;
    left: 90%;
    &.active {
      background-color: #d32a33;
    }
  }
`;
