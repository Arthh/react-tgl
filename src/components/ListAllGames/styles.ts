import styled from "styled-components";

export const Container = styled.main`
  margin-top: 20px;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  width: 100%;
  height: 400px;

  h3 {
    font-size: 20px;
    margin-top: 20px;
  }

  /* CONFIG PRO SCROLL */
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #707070;
    border-radius: 10px;
  } 
  /* END CONFIG PRO SCROLL */

  @media(max-width: 1590px) {
    width: 300px;
  }
`;