import styled from "styled-components";
import backImg from "../../assets/images/Bg1.png"
export const Wrapper = styled.main`
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 20;
`;