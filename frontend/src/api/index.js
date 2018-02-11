import axios from 'axios'
import qs from 'qs'

const base = 'http://localhost:3001/'

axios.defaults.baseURL = base;

export { axios, qs }

