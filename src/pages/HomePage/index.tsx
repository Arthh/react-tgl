import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import AlertError from '../../components/AlertError';

import arrowRight from '../../assets/icons/arrow-right(yellow).svg';
import ListAllGames from '../../components/ListAllGames';
import GameTypeButton from '../../components/GameTypeButton';

import { Container, LeftSide, RightSide, LinkRight, OptionsArea, TitleArea, FilterArea, FilterTitle, ButtonArea } from './styles';

import { IGameProps } from '../../@types/Games';
import { IErrorProps } from '../../@types/Error';

const Home: React.FC = () => {
const [error, setError] = useState<IErrorProps | undefined>();
const [games, setGames] = useState([]);
const [selectedGame, setSelectedGame] = useState<IGameProps | undefined>();

const loadAllGames = async() =>{
  try {
    const response = await api.get('/games');

    if(!response){
      throw new Error('Erro ao recuperar data.');
    }

    setGames(response.data);
  }catch (err){
    setError({text: 'Erro ao enviar requisição, tente novamente mais tarde!', color: 'red'});
    return
  }
}


  useEffect(() => {
    loadAllGames();
  },[]);

  const changeGameHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const auxGame:IGameProps|undefined = games.find((game:IGameProps) => game.type === event.currentTarget.value);

    if(selectedGame?.type === auxGame!.type) {
      return setSelectedGame(undefined);
    }else {
      return setSelectedGame(auxGame);
    }
  };

  return (
    <Container>
      <LeftSide>
        <OptionsArea >
          <TitleArea >
            <h2>recent games</h2>
          </TitleArea>

          <FilterArea >
            <FilterTitle>
              <h3>Filters</h3>
            </FilterTitle>
              <ButtonArea >
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
            </ButtonArea>
          </FilterArea>
        </OptionsArea>

        {error && <AlertError text={error?.text} color={error?.color} />}
        {!error && <ListAllGames filter={selectedGame} />}

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