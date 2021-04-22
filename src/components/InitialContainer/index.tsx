import React from 'react';

import Form from '../Authentication';

import { Container, LogoTGL, FormArea  } from './styles';

const InitialContainer: React.FC = () => {

  return (
    <Container>
      <LogoTGL>
        <div className="first-text-logo">
          <h2>The</h2>
          <h2>Greatest</h2>
          <h2>App</h2>
          <button>for</button>
        </div>
        <div className="last-text-logo">
          <h2>lottery</h2>
        </div>
      </LogoTGL>
      <FormArea>
        <Form />
      </FormArea>
    </Container>
  );
};


export default InitialContainer;