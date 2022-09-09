import {CategoryContainer} from  "./Category.styles"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selector"
import { useParams } from "react-router-dom"
import ProductCard from "../product-card/product-card"

const Category = () => {
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(()=> {
        setProducts(categoriesMap[category])
    }, [category,categoriesMap])
  return (
    <CategoryContainer >
        {
           products && products.map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)
        }
    </CategoryContainer>
  )
}

export default Category