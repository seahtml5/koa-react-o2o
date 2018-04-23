import {axios,qs,base} from './index'

export const HOME = params => { return axios.get(`${base}/user`, {params:params}); }

// 添加分类
export const ADD_CATEGORY = params => { return axios.post(`${base}/category_add`,qs.stringify(params))}

// 获取一级分类
export const CATEFORY_LEV_ONE = params => { return axios.get(`${base}/category_lev_one`,{params})} 