import { CART_ACTION_TYPES } from "./cart.types";
import {createAction} from "../../utils/reducer/reduces.util"



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

const clearCartItem = (cartItems,cartItemToClear) => cartItems.filter(item => item.id !== cartItemToClear.id)

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = (addCartitem(cartItems,productToAdd))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = (removeCartItem(cartItems,cartItemToRemove))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const clearItem = (cartItems, cartItemToClear) => {
    const newCartItems = (clearCartItem(cartItems,cartItemToClear))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

