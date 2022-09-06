import React, {useContext} from 'react'
import "./cart-Icon.scss"
import { ReactComponent as ShopppingBag} from  "../../assets/shopping-bag.svg"
import { CartContext } from '../../context/cart.context'

const CartIcon = () => {
  const { isCartOpen ,setIsCartopen} = useContext(CartContext)
  const toogleIsCartOpen = () => {
    setIsCartopen(!isCartOpen)
  }
  return (
    <div className='cart-icon-container' >
        <ShopppingBag onClick={toogleIsCartOpen} className='shopping-icon'></ShopppingBag>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon