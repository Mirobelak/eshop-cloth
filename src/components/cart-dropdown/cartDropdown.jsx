import Button from "../button/button" 
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/cart.context"
import CartItem from "../../components/cart-item/cart-item"
import "./cartDropdown.scss"

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckOutHandle = () => {
    navigate("/checkout")
  }
  return (
    <div className="cart-dropdown-container">

        <div className="cart-items">
          {cartItems.map(item => <CartItem key={item.id} cartItem={item} ></CartItem>)}
        </div>
 
        <Button onClick={goToCheckOutHandle} >GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown