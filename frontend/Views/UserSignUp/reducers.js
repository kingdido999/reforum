import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './constants'

const initialState = {
  loading: false,
  errorMsg: null,
}

export const userSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        loading: true,
        errorMsg: null,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: null,
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}
