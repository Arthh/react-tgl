import styled from "styled-components";

export const Container = styled.button`
  width: 164px;
  height: 52px;
  border: 1px solid #27C383;
  border-radius: 10px;
  opacity: 1;
  font: normal normal medium 16px/24px Helvetica;
  letter-spacing: 0px;
  color: #27C383;
  background-color: #F7F7F7;

  &:nth-child(2) {
    margin-left:40px;
  }

  &:hover{
    background-color: #27C383;
    color: #F7F7F7;
  }
`;