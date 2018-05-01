import { combineReducers } from 'redux'
import * as actionFile from '@/actions/action'

// 一级分类
function categoryLevOne(state=[],action){
    switch(action.type){
        case actionFile.UPDATE_CATEGORY_LEV_ONE:
            return [
                ...action.data      // 更新一级分类数据
            ]
            break
        default:
            return state    
    }
}

// 二级分类
function categoryLevTwo(state={},action){
    switch(action.type){
        case actionFile.UPDATE_CATEGORY_LEV_TWO:
            return {
                total:action.data.total,
                data: action.data.data
            }
        default:
            return state    
    }
}

export default combineReducers({
    categoryLevOne,
    categoryLevTwo
})