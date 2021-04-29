import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 230px 0px 142px;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  @media(max-width: 1300px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0px;
    padding-left: 10px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  float: left;
  width: 60%;
  flex-direction: column;
  
  .optionsArea {
    align-items: center;
    display: flex;
    color: #707070;
    opacity: 1;
  }

  .titleArea {
    font: italic normal bold 21px/80px Helvetica;
    text-transform: uppercase;
  }

  .filterArea {
    display: flex;
    margin: 0px 0px 0px 30px;
    align-items: center;

    h3 {
      font: italic normal normal 17px/70px Helvetica;
      letter-spacing: 0px;
      color: #868686;
      opacity: 1;
    }
  }

  @media(max-width: 1300px) {

    .optionsArea{
      display: flex;
      flex-direction: column;
    }

    .titleArea h2 {
      width: 200px;
      font-size: 24px;
    }

    .filterArea {
      flex-direction: column;
    }

    .filterTitle{
      margin-top: -20px;
      left: 0px;
      h3 {
        font-size: 25px;
      }
    }

    .buttonArea {
     width: 390px;
     padding-left: 60px;
    }
  }
`;

export const LinkRight = styled(Link)`
  font: italic normal bold 25px/83px Helvetica;
  float: right;
  letter-spacing: 0px;
  color: #B5C401;
  opacity: 1;

  img {
    width: 25px;
    height: 23px;
    padding: 5px 0px 0px 5px;
  }
`;

export const RightSide = styled.div`
`;