import { createContext, useState, useEffect } from "react";


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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartopen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=> {
        const newCartAccount = cartItems.reduce((total, item)=> 
            total + item.quantity, 0)
            setCartCount(newCartAccount)


    }, [cartItems])

    useEffect(()=> {
        const newCartTotal = cartItems.reduce((total, item)=> 
            total + item.quantity * item.price, 0)
            setCartTotal(newCartTotal)


    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartitem(cartItems,productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }
    const clearItem = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems,cartItemToClear))
    }
    const value={isCartOpen, setIsCartopen, addItemToCart, cartItems,cartCount,removeItemFromCart, clearItem, cartTotal}

    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}