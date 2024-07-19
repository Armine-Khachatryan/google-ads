import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  .key-metrics-wrap {
    margin-top: 40px;
    margin-bottom: 60px;
    h3 {
      font-family: Din_Condensed_Bold;
      font-size: 30px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 24px;
    }
  }
  .metrics-costs {
    display: flex;
    gap: 32px;
  }
  .metrics-costs-item {
    border: 2px solid #dadfdf;
    max-width: 544px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h6 {
      font-family: Roboto_Regular;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
    p {
      font-family: Roboto_Regular;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 32px;
    }
  }
  .metrics-price {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    justify-content: center;
    margin-top: 32px;
    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
      display: block;
    }
    p {
      font-family: Roboto_Regular;
      font-size: 40px;
      font-weight: 800;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0;
    }
  }
`;
