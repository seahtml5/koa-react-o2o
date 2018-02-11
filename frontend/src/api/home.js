import {axios,qs} from './index'

export const HOME = params => { return axios.get('user', {params:params}); }