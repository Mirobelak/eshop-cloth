import {CheckoutItemContainer, ImageContainer, Name, Price, Quantity, Value, Arrow, RemoveButton} from "./CheckoutItem.styles"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

const CheckoutItem = ({item}) => {
    const {clearItem,addItemToCart, removeItemFromCart} = useContext(CartContext)
    const {name, imageUrl, price, quantity} = item

    const addItemHandler = () => addItemToCart(item)
    const removeItemHandler = () => removeItemFromCart(item)

  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="name" />
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity >
        <Arrow onClick={removeItemHandler}>
            &#10094;
        </Arrow>
        <Value >{quantity}</Value>
        <Arrow onClick={addItemHandler}>
        &#10095;
        </Arrow>
        </Quantity>
      
        <Price >{price}</Price>
        <RemoveButton onClick={() => clearItem(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem