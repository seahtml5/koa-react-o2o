import {axios,qs,base} from './index'

export const HOME = params => { return axios.get(`${base}`, {params:params}); }