import {CategoryPreviewContainer, Title, Preview} from "./categoryPreview.styles"
import ProductCard from "../product-card/product-card"
import { Link } from "react-router-dom"


const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer >
        <Link to={`/shop/${title}`}><Title >{title.toUpperCase()}</Title></Link>
        <Preview>
            {
                products.filter((_, idx) => idx < 4).map((product)=> <ProductCard key={product.id} product={product} ></ProductCard>)
            }
        </Preview>

    </CategoryPreviewContainer>
  )
}

export default CategoryPreview