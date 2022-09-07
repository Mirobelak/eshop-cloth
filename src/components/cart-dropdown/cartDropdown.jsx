import Button from "../button/button" 
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/cart.context"
import CartItem from "../../components/cart-item/cart-item"
import {CartDropdownContainer,CartItems,EmptyMessage} from "./cartDropdown.styles"

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckOutHandle = () => {
    navigate("/checkout")
  }
  return (
    <CartDropdownContainer>
        <CartItems>
          { cartItems.length ? (cartItems.map((item) => <CartItem key={item.id} cartItem={item} ></CartItem>)) : <EmptyMessage>Your cart is empty</EmptyMessage> }
        </CartItems>
 
        <Button onClick={goToCheckOutHandle}>CHECK OUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown