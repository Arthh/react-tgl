import styled from "styled-components";

export const Container = styled.footer`
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  display: flex;
  justify-content:center;
  border-top: 2px solid #EBEBEB;

  h3 {
    font: normal normal normal 15px/70px Helvetica;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  @media(max-width: 1590px) {
    width: 100vw;
  }
`;