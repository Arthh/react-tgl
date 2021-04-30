import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1590px) {
    width: 100vw;
    flex-direction: column;
    padding: 0px;
    padding-left: 30px;
  }
`;
