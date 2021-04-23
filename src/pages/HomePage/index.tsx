import React from 'react';

import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import ListAllGames from '../../components/ListAllGames';

import { Container, LeftSide, RightSide } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <div className="optionsArea">
          <div className="titleArea">
            <h2>recent games</h2>
          </div>

          <div className="filterArea">
            <h3>Filters</h3>
            <button>Teste 1</button>
            <button>Teste 2</button>
            <button>Teste 3</button>
          </div>
        </div>

        <ListAllGames />
      </LeftSide>
      <RightSide>
        <span>
          New Bet
        </span>  
        <img src={arrowRight} alt="" />
      </RightSide>
    </Container>
  );
};

export default Home;