import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Body, DirectoryItemContainer, BackgroundImage} from  "./directory-item.styles"

const DirectoryItem = ({categories}) => {
    const {imageUrl, title, route } = categories
    const navigate = useNavigate()

    const NavigateHandler = () => navigate(route)
    const popis = "SHOP NOW !"
  return (
    <DirectoryItemContainer onClick={NavigateHandler} >
    <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
    <Body>
      <h2>{title}</h2>
      <p>{popis}</p>
    </Body>
    </DirectoryItemContainer>

  )
}

export default DirectoryItem


