import Button from "../button/button" 
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import CartItem from "../../components/cart-item/cart-item"
import "./cartDropdown.scss"

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">

        <div className="cart-items">
          {cartItems.map(item => <CartItem key={item.id} cartItem={item} ></CartItem>)}
        </div>
 
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown