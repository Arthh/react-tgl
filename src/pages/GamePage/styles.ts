import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 230px 0px 142px;
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

  .infos {
    .title {
      font: italic normal bold 24px/85px Helvetica;
      text-transform: uppercase;
    }

    .choose-game {
      font: italic normal bold 17px/70px Helvetica;
      color: #868686;
      margin-top: -20px;
    }

    .fill-bet{
      margin-top: 25px;
      font: italic normal bold 17px/24px Helvetica;
      color: #868686;
    }

    .bet-explain {
      font: italic normal normal 17px/24px Helvetica;
      color: #868686;
    }
  }
  
  .games-add-cart-button {
    width: 209px;
    height: 52px;
    background: #27C383 0% 0% no-repeat padding-box;
    border: 1px solid #27C383;
    border-radius: 10px;
    opacity: 1;
    font: normal normal bold 16px/24px Helvetica;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}

`;

export const RightSide = styled.div`
  float: right;
`;

export const GamesButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
