import { SIGN_UP_START, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from './constants'
import { signUpApi } from './api'

export const signUp = user => {
  return dispatch => {
    dispatch({ type: SIGN_UP_START })

    signUpApi(user)
      .then(({ data }) => {
        console.log('signed up')
        console.log(data)
        dispatch({ type: SIGN_UP_SUCCESS, payload: data })
      })
      .catch(err => dispatch({ type: SIGN_UP_FAILURE, error: err }))
  }
}
