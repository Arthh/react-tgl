import React from 'react';

import { Container, LogoTGL, FormArea, FirstTextLogo,LastTextLogo  } from './styles';

interface IInitialProps {
  children: React.ReactNode;
}

const InitialContainer: React.FC<IInitialProps> = ({ children }) => {

  return (
    <Container > 
      <LogoTGL>
        <FirstTextLogo >
          <h2>The</h2>
          <h2>Greatest</h2>
          <h2>App</h2>
          <button>for</button>
        </FirstTextLogo>
        <LastTextLogo >
          <h2>lottery</h2>
        </LastTextLogo>
      </LogoTGL>
      <FormArea>
        {children}
      </FormArea>
    </Container>
  );
};


export default InitialContainer;