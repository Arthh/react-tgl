/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Cart from '../../components/Cart';
import CreateNumbers from '../../components/CreateNumbers';
import GameTypeButton from '../../components/GameTypeButton';
import DefaultButton from '../../UI/DefaultButton';
import { IGameProps } from '../../@types/Games';

import { Container, LeftSide, RightSide, GamesButton } from './styles';

import api from '../../services/api';
import { CartActions } from '../../store/cart-slice';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [gameList, setGameList] = useState<any[]>([ ]);
  const [games, setGames] = useState([ ]);
  const [selectedGame, setSelectedGame] = useState<IGameProps>( );
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([ ]);
  
    useEffect(() => {
      // requisição a api para carregar jogos existentes!
      const loadAllGames = async() =>{
        const response = await api.get('/types');
        setSelectedGame(response.data[0]);
        setGames(response.data);
      }
      loadAllGames();
    },[]);
  
    // verificando qual jogo está selecionado
    const changeGameHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      const auxGame = games.find((game:IGameProps) => game.type === event.currentTarget.value);
      setSelectedGame(auxGame);
      return clearGameHandler();
    }, [games]);

    // função que add novo número
    const addNumberHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      // verificando se já tem o maximo de elementos possíveis
      if(selectedNumbers.length + 1> selectedGame!['max-number']) {
        return alert('Número máximo adicionado!');
      }
      // valor do botão clicado
      const newNumber = Number(event.currentTarget.value);

      // verificando se já existe no array o elemento
      if(selectedNumbers.find(num => num === newNumber)){
        const aux = selectedNumbers.filter(num => num !== newNumber);
        return setSelectedNumbers(aux);
      }

      // add no array o número, após as validações
      return setSelectedNumbers([...selectedNumbers, newNumber]);
    },[selectedGame, selectedNumbers]);

    // função que limpa os números
    const clearGameHandler = () => {
      return setSelectedNumbers([]);
    };

    // função que formata um número
    const formatNumberOfButtons = (number:number) =>{
      var formated = number < 10 ? `0${number}` : number;
      return formated;
    }

    // função que gera números aleatorios.
    const generateRandomNumbers = (numberMax:number) => {
      return Number(formatNumberOfButtons(Math.ceil(Math.random() * numberMax)));
    }

    // função que completa os números
    const completeGameHandler = useCallback(() => {
      var range =  selectedGame!.range;
      var qntNumbersForComplete = selectedGame!['max-number'] - selectedNumbers.length;
      var allNumbers = [];
      while (allNumbers.length < qntNumbersForComplete) {
        var randomNumber = generateRandomNumbers(range);
        if(allNumbers.indexOf(randomNumber) === -1 && selectedNumbers.indexOf(randomNumber) === -1 ){
          allNumbers.push(randomNumber);
        }
      }
      return setSelectedNumbers([...selectedNumbers, ...allNumbers]);
    },[generateRandomNumbers, selectedGame, selectedNumbers]);

    // função que add game no carrinho
    const addGameToCartHandler = useCallback(() => {
      const newGame = {
        id: String(new Date().getTime()),
        type: selectedGame?.type,
        numbers: selectedNumbers,
        price: selectedGame?.price,
        color: selectedGame?.color
      }
      setGameList([...gameList, newGame]);
      return clearGameHandler();
    },[selectedGame?.price, selectedGame?.type, selectedNumbers]);
    
    const saveGame = () => {
      gameList.forEach(game => {
        dispatch(CartActions.addItemToCart(game));
      })
      clearGameHandler();
      setGameList([]);
      return
    };

    const removeGame = (id: any) => {
      const aux = gameList.filter(game => game.id !== id);
      setGameList(aux);
    }

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
      
      <GamesButton>
        <div>
          <DefaultButton clickHandler={completeGameHandler}>Complete Game </DefaultButton>
          <DefaultButton clickHandler={clearGameHandler}>Clear Game </DefaultButton>
        </div>
        <div>
          <button onClick={addGameToCartHandler} className="games-add-cart-button">Add to Cart</button>
        </div>
      </GamesButton>
      </LeftSide>
      <RightSide>
        <Cart games={gameList} clickHandler={saveGame} removeHandler={removeGame} />
      </RightSide>
    </Container>
  );
};

export default Home;