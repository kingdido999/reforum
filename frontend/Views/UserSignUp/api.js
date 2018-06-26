import axios from 'axios'

export const signUpApi = user => {
  return axios.post('/api/user/signup', user)
}
