import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 148px;
  justify-content: space-between;
  background: #F7F7F7 0% 0% no-repeat padding-box;
  opacity: 1;
  color: #707070;
`;

export const LogoTGL = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 148px;

    .first-text-logo {
      font: italic normal bold 60px/75px Helvetica;
      letter-spacing: 0px;

      button {
        width: 144px;
        height: 39px;
        font: italic normal bold 18px Helvetica;
        background: #B5C401;
        border-radius: 100px;
        opacity: 1;
        color: white;
      }
    }

    .last-text-logo {
      font: italic normal bold 78px/83px Helvetica;
      letter-spacing: 0px;
      color: #707070;
      text-transform: uppercase;
    }

    h2 {
      margin-top: 10px;
    }
`;


export const FormArea = styled.div`
  padding-right: 220px;
  display: flex;
  flex-direction: column;
  font: italic normal bold 30px/65px Helvetica;
`;
