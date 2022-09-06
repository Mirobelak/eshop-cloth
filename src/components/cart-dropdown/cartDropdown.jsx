import Button from "../button/button"
import "./cartDropdown.scss"

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">

        <div className="cart-items"></div>
 
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown