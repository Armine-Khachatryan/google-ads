import styled from "styled-components";
export const ProgressWrap = styled.div`
  max-width: 736px;
  width: 100%;
  border-radius: 50px;
  progress {
    appearance: none;
    height: 16px;
    border-radius: 50px;
    background-color: #d9d9d9;
    width: 100%;
    overflow: hidden;

    /* Chrome and Safari */
    &::-webkit-progress-bar {
      background: #d9d9d9;
      border-radius: 50px;
    }

    &::-webkit-progress-value {
      background-color: #d32a33;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;

      transition: width 1s;
    }

    /* Firefox */
    &::-moz-progress-bar {
      background-color: #d32a33;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
  }
  p {
    text-align: right;
    color: #757d84;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 12px;
  }
`;