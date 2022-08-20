import React from 'react'
import "./category-item.style.scss"

const categoryItem = ({categories}) => {
    const {imageUrl, title,} = categories
    const popis = "SHOP NOW !"
  return (
    <div className="category-container">
    <div className="background-image" style={{backgroundImage: `url(${imageUrl})` }} ></div>
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>{popis}</p>
    </div>
    </div>

  )
}

export default categoryItem


