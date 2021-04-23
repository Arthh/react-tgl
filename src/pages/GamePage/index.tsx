import React from 'react';

import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import ListAllGames from '../../components/ListAllGames';

import { Container, LeftSide, RightSide } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        
        <ListAllGames />
      </LeftSide>
      <RightSide>
        Cart
      </RightSide>
    </Container>
  );
};

export default Home;