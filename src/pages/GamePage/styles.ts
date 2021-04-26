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
`;

export const RightSide = styled.div`
  float: right;
`;