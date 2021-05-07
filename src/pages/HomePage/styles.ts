import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 230px 0px 142px;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  @media(max-width: 1590px) {
    width: 100vw;
    flex-direction: column;
    padding: 0px;
    padding-left: 30px;
  }
`;

export const OptionsArea = styled.div`
  align-items: center;
  display: flex;
  color: #707070;
  opacity: 1;

  @media(max-width: 1590px) {
    flex-direction: column;
    width: 100vw;
  }
`;

export const TitleArea = styled.div`
  font: italic normal bold 21px/80px Helvetica;
  text-transform: uppercase;

  @media(max-width: 1590px) {
    margin-left: -35%;
  }
`;

export const FilterArea = styled.div`
  display: flex;
  margin: 0px 0px 0px 30px;
  align-items: center;

  h3 {
    font: italic normal normal 17px/70px Helvetica;
    letter-spacing: 0px;
    color: #868686;
    opacity: 1;
  }

  @media(max-width: 1590px) {
    flex-direction: column;
    width: 100vw;
    margin-left: -35%;
  }
`;

export const FilterTitle = styled.div`

  @media(max-width: 1590px) {
    margin-top: -20px;
    left: 0px;
    h3 {
      font-size: 25px;
    }
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

`;

export const ButtonArea = styled.div`
    @media(max-width: 1590px) {
      width: 390px;
      padding-left: 60px;
      display: flex;
      /* width: 90vw; */
      overflow-y: scroll;
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

  @media(max-width: 1590px) {
    padding-top: 10px;
    float: left;
  }

`;

export const RightSide = styled.div`

  


`;