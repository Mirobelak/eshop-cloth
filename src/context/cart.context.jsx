import {createContext, useReducer} from "react";

import {createAction} from "../../src/utils/reducer/reduces.util"

const clearCartItem = (cartItems,cartItemToClear) => cartItems.filter(item => item.id !== cartItemToClear.id)

const addCartitem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1}
        : item)
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id)}
        
        return cartItems.map((item) => item.id === cartItemToRemove.id ? {...item, quantity: item.quantity - 1}
        : item)
    
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItem: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN"

   
}

const INITIAL_STATE = {
    isCartOpen: false, 
    cartItems: [], 
    cartCount: 0,
    cartTotal: 0

}

const cartReducer = (state,action) => {
    const {type, payload} = action
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS: 
           return {
            ...state, ...payload} 
        case CART_ACTION_TYPES.SET_IS_CART_OPEN: 
           return {
            ...state, isCartOpen: payload} 
        default:
            throw new Error (`Unhandled type ${type} in User Reducer `);  
               }
} 



export const CartProvider = ({children}) => {
        const [{cartCount,cartItems, isCartOpen, cartTotal},dispatch] = useReducer(cartReducer,INITIAL_STATE)

        const updateCartItemsReducer = (newCartItems) => {

             const newCartCount = newCartItems.reduce((total, item)=> 
            total + item.quantity, 0)

             const newCartTotal = newCartItems.reduce((total, item)=> 
            total + item.quantity * item.price, 0)

            dispatch(
                createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount}))

    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartitem(cartItems,productToAdd))
        updateCartItemsReducer(newCartItems)
    }
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = (removeCartItem(cartItems,cartItemToRemove))
        updateCartItemsReducer(newCartItems)
    }
    const clearItem = (cartItemToClear) => {
        const newCartItems = (clearCartItem(cartItems,cartItemToClear))
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartopen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))

    }


    const value={isCartOpen, setIsCartopen, addItemToCart, cartItems,cartCount,removeItemFromCart, clearItem, cartTotal}

    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}