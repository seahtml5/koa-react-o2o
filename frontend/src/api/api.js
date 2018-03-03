import {axios,qs,base} from './index'

export const HOME = params => { return axios.get(`${base}/user`, {params:params}); }

// 添加分类
export const ADD_CATEGORY = params => { return axios.post(`${base}/add_category`,qs.stringify(params))}