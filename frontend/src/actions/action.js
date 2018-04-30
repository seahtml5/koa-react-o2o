// ====== action常量 ==============
export const UPDATE_CATEGORY_LEV_ONE = 'UPDATE_CATEGORY_LEV_ONE'    // 更新一级分类



// ======= action函数 ================

// 更新一级分类
export function updateCategoryLevOne(data){
    return {
        type: UPDATE_CATEGORY_LEV_ONE,
        data
    }
}
