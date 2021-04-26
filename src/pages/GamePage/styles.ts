import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 230px 0px 142px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  color: #707070;
  display: flex;
  float: left;
  flex-direction: column;
  width: 65%;

  .infos{
  .title {
    font: italic normal bold 24px/85px Helvetica;
    text-transform: uppercase;
  }

  .choose-game {
    font: italic normal bold 17px/70px Helvetica;
    color: #868686;
  }

  .fill-bet{
    font: italic normal bold 17px/24px Helvetica;
    color: #868686;
  }

  .bet-explain {
    font: italic normal normal 17px/24px Helvetica;
    color: #868686;
  }

  button {
    width: 113px;
    height: 34px;
    background-color: #FFFFFF;
    border: 2px solid black;
    border-radius: 100px;
    opacity: 1;
    margin: 0px 0px 20px 10px;
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