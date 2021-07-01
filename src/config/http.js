import axios from 'axios'

const urlApi = process.env.REACT_APP_API

console.log(urlApi)

console.log(process.env.REACT_APP_API)
const http = axios.create({
  baseURL: urlApi
})

export default http
