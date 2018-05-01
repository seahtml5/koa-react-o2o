// ====== action常量 ==============
export const UPDATE_CATEGORY_LEV_ONE = 'UPDATE_CATEGORY_LEV_ONE'    // 更新一级分类
export const UPDATE_CATEGORY_LEV_TWO = 'UPDATE_CATEGORY_LEV_TWO'    // 更新二级分类



// ======= action函数 ================

// 更新一级分类
export function updateCategoryLevOne(data){
    return {
        type: UPDATE_CATEGORY_LEV_ONE,
        data
    }
}

// 更新二级分类
export function updateCategoryLevTwo(data){
    return {
        type: UPDATE_CATEGORY_LEV_TWO,
        data
    }
}
