import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => {}
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartopen] = useState(false)
    const value={isCartOpen,setIsCartopen}

    return (
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}