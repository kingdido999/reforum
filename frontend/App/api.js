import axios from 'axios'

export const fetchForums = forum_id => {
  return axios.get('/api/forum')
}

export const fetchUser = () => {
  console.log(2)
  return axios.get('/api/user/getUser')
}
