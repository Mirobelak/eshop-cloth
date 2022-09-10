import { createAction } from "../../utils/reducer/reduces.util"
import { CATEGORIES_ACTION_TYPE } from "./categories.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase"

// export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCES, categoriesArray)

export const fetchCategoriesFail = (error) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL,error )

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())
    try {
        const categoriesArray = await getCategoriesAndDocuments("categories")
        dispatch(fetchCategoriesSuccess(categoriesArray))
    }
    catch(error) {
        dispatch(fetchCategoriesFail(error))


    }

}