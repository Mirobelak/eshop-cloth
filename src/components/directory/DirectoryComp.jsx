import React from 'react'
import CategoryItem from '../category-item/category-item'
import "./Directory.style.scss"

const DirectoryComp = ({categories}) => {
  return (
    <div className="categories-container">
    {categories.map((categories)=> {return (
        <CategoryItem key={categories.id} categories={categories} />)})}
   
   </div>
  )
}

export default DirectoryComp