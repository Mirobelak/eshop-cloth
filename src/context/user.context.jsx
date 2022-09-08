import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangeListener,createUsedDocFromAuth } from "../utils/firebase/firebase";
import {createAction} from "../utils/reducer/reduces.util"


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = (state,action) => {
  
    const {type, payload} = action
    switch(type){
        case  USER_ACTION_TYPES.SET_CURRENT_USER : 
           return {
            ...state, currentUser: payload} 
        default:
            throw new Error (`Unhandled type ${type} in User Reducer `);  
               }
} 
const INITIAL_STATE = {
    currentUser: null
}
export const UserProvider =  ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE )
    
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }
    const value = {currentUser, setCurrentUser}

    useEffect(()=>{
        
      const unsubscribe  = onAuthStateChangeListener((user)=>{
        if(user) {
            createUsedDocFromAuth(user) 
        }
        setCurrentUser(user)
        
       ;
      })
    return unsubscribe;
        }, [])

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}

