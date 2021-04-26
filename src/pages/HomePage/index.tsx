import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import ListAllGames from '../../components/ListAllGames';
import GameTypeButton from '../../components/GameTypeButton';

import { Container, LeftSide, RightSide } from './styles';

interface IGameProps {
  type: string;
  description: string;
  range: number;
  price: number;
  color: string;
}

const Home: React.FC = () => {
const [games, setGames] = useState([]);

  useEffect(() => {
    const loadAllGames = async() =>{
      const response = await api.get('/types');
      setGames(response.data);
    }

    loadAllGames();
  },[]);

  return (
    <Container>
      <LeftSide>
        <div className="optionsArea">
          <div className="titleArea">
            <h2>recent games</h2>
          </div>

          <div className="filterArea">
            <h3>Filters</h3>
            {games.map((game:IGameProps) => (
              <GameTypeButton 
              color={game.color}
              itsactive={false}
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