import {CategoryContainer} from  "./Category.styles"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { SelectCategoriesIsLoading,selectCategoriesMap } from "../../store/categories/categories.selector"
import { useParams } from "react-router-dom"
import ProductCard from "../product-card/product-card"
import Spinner from "../spinner/spinner"

const Category = () => {
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(SelectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(()=> {
        setProducts(categoriesMap[category])
    }, [category,categoriesMap])
  
    return (
      <>
      {
        isLoading ? <Spinner/> :  
        <CategoryContainer >
        {
           products && products.map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)
        }
    </CategoryContainer>
      }
   
    </>
  )
}

export default Category