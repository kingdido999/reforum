import { LOG_IN_START, LOG_IN_FAILURE, LOG_IN_SUCCESS } from './constants'
import axios from 'axios'

export const login = user => {
  return dispatch => {
    dispatch({ type: LOG_IN_START })

    axios
      .post('/api/user/login', user)
      .then(({ data }) => {
        dispatch({ type: LOG_IN_SUCCESS, payload: data })
      })
      .catch(err => dispatch({ type: LOG_IN_FAILURE, error: err }))
  }
}
