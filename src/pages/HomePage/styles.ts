import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 230px 0px 142px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  float: left;
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

    button {
      width: 113px;
      height: 34px;
      background-color: #FFFFFF;
      border: 2px solid black;
      border-radius: 100px;
      opacity: 1;
      margin: 0px 10px;
    }

  }
`;


export const RightSide = styled.div`
  font: italic normal bold 22px/83px Helvetica;
  float: right;
  letter-spacing: 0px;
  color: #B5C401;
  opacity: 1;

  img {
    width: 24px;
    height: 20px;
    padding: 5px 0px 0px 5px;
  }
`;