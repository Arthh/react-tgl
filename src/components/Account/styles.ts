import styled from 'styled-components';

interface IButtonProps {
  inputColor: string;
}

export const TitleOfForm = styled.h2`
  text-align: center;
  font: italic normal bold 35px/70px Helvetica;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;

export const LogInButton = styled.div`
  width: 100%;
  text-align: center;
`;

export const Button = styled.button<IButtonProps>`
  background-color: transparent;
  font: italic normal bold 35px/70px Helvetica;
  letter-spacing: 0px;
  color: ${props => props.inputColor};
  opacity: 1;
  margin-bottom: 15px;

  @media(max-width: 1590px) {
    width: 200px;
  }

    img {
      width: 25px;
      height: 20px;
      margin-left: 10px;
      margin-right: 10px;
    }
`;