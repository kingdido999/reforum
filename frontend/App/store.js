import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { appReducer, userReducer } from './reducers'
import { feedReducer } from '../Views/ForumFeed/reducers'
import { singleDiscussionReducer } from '../Views/SingleDiscussion/reducers'
import { newDiscussionReducer } from '../Views/NewDiscussion/reducers'
import { adminInfoReducer } from '../Views/AdminDashboard/reducers'
import { userProfileReducer } from '../Views/UserProfile/reducers'
import { userLogInReducer } from '../Views/UserLogIn/reducers'
import { userSignUpReducer } from '../Views/UserSignUp/reducers'

// root reducer for app
const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  feed: feedReducer,
  discussion: singleDiscussionReducer,
  newDiscussion: newDiscussionReducer,
  adminInfo: adminInfoReducer,
  userProfile: userProfileReducer,
  userLogIn: userLogInReducer,
  userSignUp: userSignUpReducer,
})

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk, logger]
// application store
let store = createStore(
  rootReducer,
  /* preloaded state, */
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
