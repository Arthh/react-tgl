import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  margin: 0px 2px 10px 2px;
  border-left: 4px solid ${props => props.color};

  .infoGameArea {
    display: flex;
    word-wrap: break-word;
    margin: 0px 10px;
    width: 450px;
    flex-direction: column;
    opacity: 1;

    p {
      margin-top: 5px;
      font: italic normal bold 20px/40px Helvetica;
      color: #868686;
    }

    span {
        font: normal normal normal 17px/50px Helvetica;
        color: #868686;
        
        &:nth-child(1){
          margin-left: 10px;
        }
      }

    h2 {
      margin-top: -10px;
      font: italic normal bold 20px/30px Helvetica;
      color: ${props => props.color};
    }
  }
`;