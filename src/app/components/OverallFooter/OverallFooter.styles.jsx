import styled from "styled-components";
import footerImg from "../../assets/images/overallFooter.png";
export const Wrapper = styled.div`
  background-image: url(${footerImg});
  background-size: cover;
  background-position: center;
  padding: 60px 15px;
`;

export const Content = styled.div`
  text-align: center;
  h2,
  span {
    font-family: Din_Condensed_Bold, sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 96%;
    color: #fff;
    margin-bottom: 24px;
    text-align: center;
    text-transform: uppercase;
  }
  & span {
    color: #d32a33;
  }
  .found-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .box-found {
    padding: 24px 10px;
    border-radius: 10px;
    border: 3px solid #d32a33;
    background-color: #edf0f0;
    max-width: 294px;
    width: 100%;

    h5 {
      font-size: 60px;
      font-weight: 700;
      line-height: 72px;
      color: #17242e;
      margin-bottom: 32px;
    }
    h6 {
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      color: #49525a;
      margin-bottom: 8px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: #757d84;
    }
  }
  .footer-btn {
    display: flex;
    flex-direction: column;
    gap: 16px;
    button {
      border-radius: 8px;
      width: 179px;
      padding: 12px 0;
      background-color: #d32a33;
      font-family: Roboto_Regular;
      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #17242e;
        margin-bottom: 0;
      }
    }
    .share-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: #dadfdf;
      justify-content: center;
    }
    .check-btn {
      padding: 14px 0;
      color: #fff;
    }
  }
`;
