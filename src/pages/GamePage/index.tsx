import React, { useEffect, useState } from 'react';
import Cart from '../../components/Cart';
import CreateNumbers from '../../components/CreateNumbers';
import GameTypeButton from '../../components/GameTypeButton';

import { IGameProps } from '../../@types/Game';

import { Container, LeftSide, RightSide } from './styles';
import api from '../../services/api';

const Home: React.FC = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState<IGameProps>();
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  
    useEffect(() => {
      const loadAllGames = async() =>{
        const response = await api.get('/types');
        setGames(response.data);
        setSelectedGame(response.data[0]);
      }
      loadAllGames();
    },[]);
  
    const changeGameHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      const auxGame = games.find((game:IGameProps) => game.type === event.currentTarget.value);
      setSelectedGame(auxGame);
    };

    const addNumberHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      if(selectedNumbers.length + 1> selectedGame!['max-number']) {
        return alert('Número máximo adicionado!');
      }
      setSelectedNumbers([...selectedNumbers, Number(event.currentTarget.value)]);
    };

  return (
    <Container>
      <LeftSide>
        <div className="infos">
      <h3 className="title">  NEW BET FOR {selectedGame?.type} </h3>
      <h3 className="choose-game">Choose a game</h3>
      <div>
      {games.map((game:IGameProps) => (
        <GameTypeButton 
        color={game.color}
        value={game.type}
        itsactive={selectedGame?.type === game.type}
        clickHandler={changeGameHandler}
        >
        {game.type}
        </GameTypeButton>
      ))}
      </div>
      <h4 className="fill-bet">Fill your bet</h4>
      <span className="bet-explain">
      {selectedGame?.description}
      </span>
      </div>
      {selectedGame && <CreateNumbers clickHandler={addNumberHandler} numbers={selectedNumbers} quantity={selectedGame.range | 0} />}
      </LeftSide>
      <RightSide>
        <Cart />
      </RightSide>
    </Container>
  );
};

export default Home;