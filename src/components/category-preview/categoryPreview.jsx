import "./categoryPreview.scss"
import ProductCard from "../product-card/product-card"
import { Link } from "react-router-dom"


const CategoryPreview = ({title, products}) => {
  return (
    <div className="category-preview-container" >
        <Link to={`/shop/${title}`}><span className="title" >{title.toUpperCase()}</span></Link>
        <div className="preview">
            {
                products.filter((_, idx) => idx < 4).map((product)=> <ProductCard key={product.id} product={product} ></ProductCard>)
            }
        </div>

    </div>
  )
}

export default CategoryPreview