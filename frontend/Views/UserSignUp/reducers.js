import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './constants'

const initialState = {
  loading: false,
  errors: [],
}

export const userSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        loading: true,
        errors: [],
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        errors: Array.isArray(action.payload)
          ? [...action.payload]
          : [action.payload],
      }
    default:
      return state
  }
}
