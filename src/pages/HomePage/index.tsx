import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import ListAllGames from '../../components/ListAllGames';
import GameTypeButton from '../../components/GameTypeButton';

import { Container, LeftSide, RightSide } from './styles';

import { IGameProps } from '../../@types/Game';

const Home: React.FC = () => {
const [games, setGames] = useState([]);
const [selectedGame, setSelectedGame] = useState<IGameProps>();

  useEffect(() => {
    const loadAllGames = async() =>{
      const response = await api.get('/types');
      setGames(response.data);
    }
    loadAllGames();
  },[]);

  const changeGameHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const auxGame = games.find((game:IGameProps) => game.type === event.currentTarget.value);
    setSelectedGame(auxGame);
  };

  return (
    <Container>
      <LeftSide>
        <div className="optionsArea">
          <div className="titleArea">
            <h2>recent games</h2>
          </div>

          <div className="filterArea">
            <h3>Filters</h3>
            {games.map((game:IGameProps, indx) => (
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