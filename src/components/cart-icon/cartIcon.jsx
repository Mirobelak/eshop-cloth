import React, {useContext} from 'react'
import {CartIconContainer, ShoppingIcon, ItemCount} from "./cart-Icon.styles"
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
  const { isCartOpen ,setIsCartopen,cartCount} = useContext(CartContext)
  const toogleIsCartOpen = () => {
    setIsCartopen(!isCartOpen)
  }
  return (
    <CartIconContainer>
        <ShoppingIcon onClick={toogleIsCartOpen}></ShoppingIcon>
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon