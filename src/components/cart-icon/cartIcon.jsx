import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'
import {CartIconContainer, ShoppingIcon, ItemCount} from "./cart-Icon.styles"

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectCartIsOpen)
  
  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen)

  )
  
  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
        <ShoppingIcon ></ShoppingIcon>
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon