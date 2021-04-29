import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  right: 40px;
  top: 130px;
  width: auto;
  height: auto;
  background-color: #FFFF;
  border: 1px solid  ${props => props.color};
  border-radius: 8%;
  justify-content: center;
  align-items: center;
`; 


export const ErrorBox = styled.h2`
  font: italic normal bold 14px/25px Helvetica;
  padding: 10px 10px;
  color: #707070;
  opacity: 1;
`; 