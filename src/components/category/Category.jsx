import "./Category.scss"
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../context/categories.context"
import ProductCard from "../product-card/product-card"

const Category = () => {
    const {category} = useParams()
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(()=> {
        setProducts(categoriesMap[category])
    }, [category,categoriesMap])
  return (
    <div className="category-container" >
        {
           products && products.map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)
        }
    </div>
  )
}

export default Category