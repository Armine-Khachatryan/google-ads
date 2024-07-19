import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;

  .container {
    display: flex;
    gap: 40px;
  }
  .count-box {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid #dadfdf;
    max-width: 192px;
    width: 100%;

    p {
      /* font-family: DIN Condensed; */
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .wasted-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 60px;
    max-width: 864px;
    width: 100%;
    h2 {
      font-family: Din_Condensed_Bold;
      font-size: 40px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
      text-transform: uppercase;
    }
    h6 {
      font-family: Roboto_Regular;
      font-size: 16px;
      font-weight: 500;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    }
    p {
      font-family: Roboto_Regular;
      font-size: 16px;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  hr {
    border-bottom: 1px solid #dadfdf;
  }
`;
