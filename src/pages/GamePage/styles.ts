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