import styled from "styled-components";

interface IContainerProps {
  itsactive: boolean;
}

export const Container = styled.button<IContainerProps>`
  width: 63px;
  height: 65px;

  background-color: ${props => props.itsactive ? '#01AC66' : '#ADC0C4' };
  border-radius: 100%;

  margin: none;
  border: none;

  margin: 0px 12px 15px 0px;

  color: #FFFF;
`;