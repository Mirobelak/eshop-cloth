import { createAction } from "../../utils/reducer/reduces.util"
import { CATEGORIES_ACTION_TYPE } from "./categories.types"

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCES, categoriesArray)

export const fetchCategoriesFail = (error) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL,error )

