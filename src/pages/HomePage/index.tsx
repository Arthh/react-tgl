import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import ListAllGames from '../../components/ListAllGames';
import GameTypeButton from '../../components/GameTypeButton';

import { Container, LeftSide, RightSide, LinkRight } from './styles';

import { IGameProps } from '../../@types/Games';

const Home: React.FC = () => {
const [games, setGames] = useState([]);
const [selectedGame, setSelectedGame] = useState<IGameProps | undefined>();


  useEffect(() => {
    const loadAllGames = async() =>{
      const response = await api.get('/types');
      setGames(response.data);
    }
    loadAllGames();
  },[]);

  const changeGameHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const auxGame:IGameProps|undefined = games.find((game:IGameProps) => game.type === event.currentTarget.value);

    if(selectedGame?.type === auxGame!.type) {
      setSelectedGame(undefined)
    }
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
            <div className="filterTitle">
              <h3>Filters</h3>
            </div>
              <div className="buttonArea">
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
        </div>

        <ListAllGames filter={selectedGame} />

      </LeftSide>
      <RightSide>
        <LinkRight to="/games">
          New Bet
          <img src={arrowRight} alt="" />
        </LinkRight>  
      </RightSide>
    </Container>
  );
};

export default Home;