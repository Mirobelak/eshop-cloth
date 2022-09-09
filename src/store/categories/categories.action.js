import { createAction } from "../../utils/reducer/reduces.util"
import { CATEGORIES_ACTION_TYPE } from "./categories.types"

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)