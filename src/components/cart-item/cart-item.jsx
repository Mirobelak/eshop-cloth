import React from 'react'
import {CartItemContainer, ItemDetails, Name} from  "./cart-item.styles.jsx"

const cartItem = ({cartItem}) => {
    const {name,imageUrl, quantity, price} = cartItem
  return (
    <CartItemContainer >
        <img src={imageUrl}  alt="productIMage"/>
        <ItemDetails>
        <Name>{name}</Name>
        <span className='price'> {quantity} x  ${price}</span>
        </ItemDetails>
    </CartItemContainer>
  )
}

export default cartItem