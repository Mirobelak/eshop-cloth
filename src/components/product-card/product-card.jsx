import {ProductCardContainer, Footer, Price, Name} from "./product-card.styles"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import {addItemToCart} from "../../store/cart/cart.action"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button"

const ProductCard = ({product}) => {
    const {name,price, imageUrl}  = product
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const  addProductToCart = () => dispatch(addItemToCart(cartItems,product))
  return (
    <ProductCardContainer >
        <img src={imageUrl} alt="product" />
        <Footer>
            <Name>{name} </Name>
            <Price>{price} </Price>
        </Footer>
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted} >
            Add to card
        </Button>

    </ProductCardContainer>
  )
}

export default ProductCard