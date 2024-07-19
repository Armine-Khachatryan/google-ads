import styled from "styled-components";
export const Wrapper = styled.div`
  .select-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    p {
      font-family: Roboto_Regular;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .info-negative {
    margin-top: 60px;
    padding-bottom: 80px;
    .info-negative-item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .info-negative-item-block {
        display: flex;
        gap: 16px;
        border: 1px solid #dadfdf;
        border-radius: 8px;
        padding: 20px;
        width: 100%;
        &.wrong {
          border: 1px solid #f5db6f;

          background: #fdfbec;
        }
        img {
          width: 24px;
          height: 24px;
          object-fit: cover;
          display: block;
        }
        div {
          display: flex;
          flex-direction: column;
          gap: 8px;
          h6 {
            font-family: Roboto_Regular;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: left;
          }
        }
      }
    }
  }
`;
