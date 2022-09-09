import CategoryPreview from "../../components/category-preview/categoryPreview"
import {useSelector} from "react-redux"
import {selectCategoriesMap} from "../../store/categories/categories.selector"



const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  return (
    <>
    {Object.keys(categoriesMap).map(title => {
      const products = categoriesMap[title]
      return <CategoryPreview key={title} title={title} products={products} ></CategoryPreview>
    }
        )
      
    }
   
    </>
   
  )
}

export default CategoriesPreview