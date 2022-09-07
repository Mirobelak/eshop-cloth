import {ProductCardContainer, Footer, Price, Name} from "./product-card.styles"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button"

const ProductCard = ({product}) => {
    const {name,price, imageUrl}  = product
    const {addItemToCart} = useContext(CartContext)

    const  addProductToCart = ()=> addItemToCart(product)
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