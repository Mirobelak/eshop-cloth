import React from 'react'
import "./cart-item.scss"

const cartItem = ({cartItem}) => {
    const {name,imageUrl, quantity, price} = cartItem
  return (
    <div className='cart-item-container' >
        <img src={imageUrl}  alt="productIMage"/>
        <div className="item-details">
        <span className='name'>{name}</span>
        <span className='price'> {quantity} x  ${price}</span>
        </div>
    </div>
  )
}

export default cartItem