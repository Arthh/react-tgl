// import { UserActions } from './user.slice'
import api from '../services/api'

import { IUserProps } from '../@types/User';
import { IResetProps } from '../@types/ResetPass';
import { UserActions } from './user.slice';

export const sendCreateUser = (userData:IUserProps) => {
  return async () => {
    const sendData = async() => {
      const response = await api.post('/users', {
        name: userData.name,
        email: userData.email,
        password: userData.password
      })
      return response 
    }
    try {
      await sendData()
    }catch (err){
      alert('Email em uso!')
    }
  }
}

// export const sendLoginUser = (userData: IUserProps) => {
//   return async (dispatch: any) => {
//     const sendData = async() => {
//       const response = await api.post('/sessions', {
//         email: userData.email,
//         password: userData.password
//       })
//       return response
//     }

//     try {
//       const response = await sendData()
//       dispatch(UserActions.logIn(response.data))
      
//     } catch (err) {
//       alert(err.message)
//       console.log('deu erro brother')
//     }
//   }
// }

export const getGamesOfUser = () => {
  return async (dispatch: any) => {
    const sendData = async() => {
      const response = await api.get('/games/bets/all', {
      })
      return response 
    }
    try {
      const response = await sendData()
      dispatch(UserActions.setGames(response.data))
    }catch (err){
      alert('bugou')
    }
  }
}

export const sendNewGames = (cart:any, totalPrice:any) => {
  return async () => {
    const sendData = async() => {
      const response = await api.post('/games/bets', {
        cart,
        totalPrice
      })
      return response 
    }
    try {
      await sendData()
    }catch (err){
      alert('bugou')
    }
  }
}

export const forgotPassword = (email:any) => {
  return async () => {
    const sendData = async() => {
      const response = await api.post('/passwords', {email:email})
      return response 
    }

    try {
      await sendData()
    }catch (err){
      console.log(err)
    }
  }
}

export const resetPassword = (data: IResetProps) => {
  return async () => {
    const sendData = async() => {
      const response = await api.put('/passwords', {
        token: data.token,
        password: data.password
      })
      return response 
    }

    try {
      await sendData()
    }catch (err){
      console.log(err)
    }
  }
}
