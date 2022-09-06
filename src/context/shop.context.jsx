import PRODUCTS from "../../src/shopdata.json"
import { createContext, useState } from "react";

export const ProductContext = createContext({
    product: [],
})

export const ProductProvider =  ({children}) => {
    
    const [product, setProducts] = useState(PRODUCTS)
    const value = {product}

return <ProductContext.Provider value={value} >{children}</ProductContext.Provider>
}