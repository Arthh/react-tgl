import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const RemoveButtonArea = styled.div`
  display: flex;
  width: 24px;
  height: 86px;
  justify-content: center;
  border-right: 4px solid ${props => props.color};

  button {
    background: none;
    border: none;
    margin-right: 10px;

    img {
      width: 20px;
      height: 24px;
    }
  }
`;

export const InfoGameArea = styled.div`
  display: flex;
  word-wrap: break-word;
  margin: 0px 10px;
  width: 233px;
  flex-direction: column;
  opacity: 1;

  p {
    margin-top: 5px;
    font: italic normal bold 15px/20px Helvetica;
    color: #868686;
  }

  h2 {
    margin-top: -10px;
    font: italic normal bold 16px/70px Helvetica;
    color: ${props => props.color};

    span {
      font: normal normal normal 16px/70px Helvetica;
      color: #868686;
      margin-left: 10px;
    }
  }
`;

export const Container = styled.div<IContainerProps>`
  display: flex;
  margin: 0px 2px 10px 5px;

`;