import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;


  /* CONFIG PRO SCROLL */
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #707070;
    border-radius: 10px;
  } 
  /* END CONFIG PRO SCROLL */
`;