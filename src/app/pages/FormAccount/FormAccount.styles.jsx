import styled from "styled-components";

export const Wrapper = styled.div``;

export const LabelStyle = styled.label`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #17242e;
`;

export const SelectStyle = styled.select`
  border-radius: 16px;
  padding: 8px 16px;
  width: 736px;
  background-color: #fff;
  margin-bottom: 40px;
  color: #49525a;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

export const InputStyle = styled.input`
  border-radius: 16px;
  padding: 8px 16px;
  width: 736px;
  background-color: #fff;
  margin-bottom: 40px;
  color: #49525a;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;
export const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & .error-msg {
    color: red;
  }
`;


export const FormWrap = styled.form`
margin-top: 40px;
`;