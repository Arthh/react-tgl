export interface INewGameProps {
  price: number;
  game: {
    id: string,
    type: string,
    color: string,
    numbers: number[],
    price: number,
    day: Date,
    game: {
      type: string,
      color: string,
    }
  };
}