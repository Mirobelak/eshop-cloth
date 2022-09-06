import "./CheckoutItem.scss"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

const CheckoutItem = ({item}) => {
    const {clearItem,addItemToCart, removeItemFromCart} = useContext(CartContext)
    const {name, imageUrl, price, quantity} = item

    const addItemHandler = () => addItemToCart(item)
    const removeItemHandler = () => removeItemFromCart(item)

  return (
    <div className="checkout-item-container" >
        <div className="image-container">
            <img src={imageUrl} alt="name" />
        </div>
        <span className="name" >{name}</span>
        <span className="quantity" >
        <div onClick={removeItemHandler} className="arrow">
            &#10094;
        </div>
        <span className="value" >{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
        &#10095;
        </div>
        </span>
      
        <span className="price" >{price}</span>
        <span onClick={() => clearItem(item)} className="remove-button" >&#10005;</span>
    </div>
  )
}

export default CheckoutItem