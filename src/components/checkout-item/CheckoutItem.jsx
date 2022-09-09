import {CheckoutItemContainer, ImageContainer, Name, Price, Quantity, Value, Arrow, RemoveButton} from "./CheckoutItem.styles"
import { useSelector, useDispatch } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import {addItemToCart, removeItemFromCart, clearItem} from "../../store/cart/cart.action"

const CheckoutItem = ({item}) => {
    const {name, imageUrl, price, quantity} = item

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    const addItemHandler = () => dispatch(addItemToCart(cartItems,item))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,item))
    const clearItemHandler = () => dispatch(clearItem(cartItems, item))

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
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem