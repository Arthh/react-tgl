import styled from 'styled-components';

export const TitleOfForm = styled.h2`
  text-align: center;
  font: italic normal bold 35px/70px Helvetica;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 352px;
  height: 317px;

  background-color: #FFFFFF;
  box-shadow: 0px 3px 25px #F7F7F7;
  border: 1px solid #DDD;

  border-radius: 19px;

  input {
    width: 100%;
    text-align: left;
    font: italic normal bold 18px/60px Helvetica;
    letter-spacing: 0px;
    color: #9D9D9D;
    opacity: 1;
    border-bottom: 2px solid #ebebeb;
    padding: 5px 35px;
  }

  a {
    padding-right: 27px;
    text-align: right;
    font: italic normal normal 17px/70px Helvetica;
    letter-spacing: 0px;
    color: #C1C1C1;
    opacity: 1;
  }
`;

export const LogInButton = styled.div`
  width: 100%;
  text-align: center;
  

  button {
    background-color: transparent;
    font: italic normal bold 35px/70px Helvetica;
    letter-spacing: 0px;
    color: #B5C401;
    opacity: 1;
  }
`;