import { IUserProps } from './User';

export interface IBdUsersProps {
  users: IUserProps[],
  isLogged?: boolean
}