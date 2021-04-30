import styled from "styled-components";

interface iContainerProps {
  color: string;
  itsactive: boolean;
}

export const Container = styled.button<iContainerProps>`
  width: 113px;
  height: 34px;

  color:  ${props => props.itsactive ? 'white' : props.color};
  background-color:  ${props => props.itsactive ? props.color : 'white'};
  
  border: 2px solid ${props => props.color};
  border-radius: 100px;
  opacity: 1;
  margin: 0px 10px;

  font: italic normal bold 14px Helvetica; 


  @media(max-width: 1590px) {
    font-size: 15px;
    width: 113px;
    margin: 3px 4px;
  }
`;