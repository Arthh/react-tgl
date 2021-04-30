import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 230px 0px 142px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(max-width: 1590px) {
    width: 90vw;
    flex-direction: column;
    padding: 0px 10px;
  }
`;

export const DivInfo = styled.div`
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
`;

export const BetExplain = styled.div`
  font: italic normal normal 17px/24px Helvetica;
  color: #868686;
`;

export const ChooseGameTitle = styled.div`
  margin-top: 0px;
  left: 0px;
`;

export const ButtonArea = styled.div`
 width: 90vw;
  display: flex;
  overflow-x: scroll;
  /* CONFIG PRO SCROLL */
    ::-webkit-scrollbar {
      width: 1px;
      height: 2px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #707070;
      border-radius: 10px;
    } 
    /* END CONFIG PRO SCROLL */
`;

export const LeftSide = styled.div`
  color: #707070;
  display: flex;
  float: left;
  flex-direction: column;
  width: 65%;
  
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

@media(max-width: 1590px) {

.title{
  width: 100vw;
  margin: 5px 0px;
}

.choosegameTitle{
  margin-top: 0px;
  left: 0px;
}

.bet-explain {
  width: 90vw;
}

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

  @media(max-width: 1590px) {
    flex-direction: column;
    margin: 10 0px;
    padding: 0px;
  }
`;
