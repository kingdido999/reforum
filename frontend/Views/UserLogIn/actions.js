import { LOG_IN_START, LOG_IN_FAILURE, LOG_IN_SUCCESS } from './constants'
import axios from 'axios'
import { browserHistory } from 'react-router'

export const login = user => {
  return async dispatch => {
    dispatch({ type: LOG_IN_START })

    try {
      const { data } = await axios.post('/api/user/login', user)
      dispatch({ type: LOG_IN_SUCCESS, payload: data })
      browserHistory.push('/')
    } catch (err) {
      dispatch({ type: LOG_IN_FAILURE, payload: err.response.data })
    }
  }
}
