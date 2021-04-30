import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ebebeb;
  margin-top: 100px;
  padding: 15px 0;
  bottom: 0px;

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