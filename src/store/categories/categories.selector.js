import {createSelector} from "reselect"

const SelectCategoryReducer = (state) => state.categories

export const SelectCategories = createSelector([SelectCategoryReducer], (categoriesSlice)=>categoriesSlice.categories)

export const selectCategoriesMap = createSelector([SelectCategories],(categories) => categories.reduce((acc, category)=> {
  const {title, items } = category
  acc[title.toLowerCase()] =  items
  return acc
}, {}))
