import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE } from './constants'

const initialState = {
  loading: false,
  errors: [],
}

export const userLogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_START:
      return {
        ...state,
        loading: true,
        errors: [],
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
      }
    case LOG_IN_FAILURE:
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
