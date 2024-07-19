import styled from "styled-components";
export const Wrapper = styled.div`
  overflow: auto;
  /* white-space: nowrap; */
  max-width: 1150px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding-top: 80px;
  .cardStaticWrap {
    padding-bottom: 25px;
  }
  /* -webkit-overflow-scrolling: touch;
  --sb-track-color: #ffffff;
  --sb-thumb-color: #17242e;
  --sb-size: 6px;

  &::-webkit-scrollbar {
    width: var(--sb-size);
    height: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 3px;
  }

  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  } */
`;

export const CardStaticItemWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;
export const CardStaticBox = styled.div`
  background: #edf0f0;
  border: 2px solid #d32a33;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  min-height: 65px;
  min-width: 100px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
`;
export const CardStaticTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 31.2px;
  color: #17242e;
  text-transform: uppercase;
  max-width: 180px;
  text-align: left;
  width: 100%;
`;
