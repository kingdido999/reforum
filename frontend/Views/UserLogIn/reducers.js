import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE } from './constants'

const initialState = {
  loading: false,
  errorMsg: null,
}

export const userLogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_START:
      return {
        ...state,
        loading: true,
        errorMsg: null,
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: null,
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}
