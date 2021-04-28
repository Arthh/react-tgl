import { INewGameProps } from './NewGame';

export interface ICartProps {
  games: INewGameProps[],
  totalPrice: number;
}