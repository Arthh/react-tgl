import React from 'react';
import Cart from '../../components/Cart';
import CreateNumbers from '../../components/CreateNumbers';
import GameTypeButton from '../../components/GameTypeButton';


import { Container, LeftSide, RightSide } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <div className="infos">
      <h3 className="title">  NEW BET FOR -Game- </h3>
      <h3 className="choose-game">Choose a game</h3>
      <div>
      <GameTypeButton 
        color={'#7F3992'}
        itsactive={false}
      >
        Teste 1
      </GameTypeButton>
      <GameTypeButton 
        color={'#01AC66'}
        itsactive={false}
      >
        Teste 1
      </GameTypeButton>
      <GameTypeButton 
        color={'#F79C31'}
        itsactive={false}
      >
        Teste 1
      </GameTypeButton>
      </div>
      <h4 className="fill-bet">Fill your bet</h4>
      <span className="bet-explain">
      Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by  hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
      </span>
      </div>
      <CreateNumbers quantity={20} />
      </LeftSide>
      <RightSide>
        <Cart />
      </RightSide>
    </Container>
  );
};

export default Home;