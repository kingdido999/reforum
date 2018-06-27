import { SIGN_UP_START, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from './constants'
import { browserHistory } from 'react-router'
import axios from 'axios'

export const signUp = user => {
  return async dispatch => {
    dispatch({ type: SIGN_UP_START })

    try {
      const { data } = await axios.post('/api/user/signup', user)
      dispatch({ type: SIGN_UP_SUCCESS, payload: data })
      browserHistory.push('/')
    } catch (err) {
      dispatch({ type: SIGN_UP_FAILURE, payload: err.response.data })
    }
  }
}
