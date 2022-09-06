import { createContext, useState, useEffect } from "react";

const addCartitem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1}
        : item)
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartopen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(()=> {
        const newCartAccount = cartItems.reduce((total, item)=> 
            total + item.quantity, 0)
            setCartCount(newCartAccount)


    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartitem(cartItems,productToAdd))
    }
    const value={isCartOpen, setIsCartopen, addItemToCart, cartItems,cartCount}

    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}