
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://15d4ab0a5f69.ngrok.io/user/2'
})

export default api
