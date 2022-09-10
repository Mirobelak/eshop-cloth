import { CATEGORIES_ACTION_TYPE } from "./categories.types"


export const CATEGORIES_ININTIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (state = CATEGORIES_ININTIAL_STATE, action = {} ) => {
    const {type, payload} = action 

    switch(type) {
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {...state, isLoading:true}
        case  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCES:
        return {...state, categories:payload,  isLoading:false}
        case  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL:
        return {...state, error:payload,isLoading:false}
        default: 
        return state;
    }


}