import {Routes, Route} from "react-router-dom"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../../components/category/Category"
import "./shop.scss"

const Shop = () => {
  return (
      <Routes>
        <Route index element={<CategoriesPreview/>} ></Route>
        <Route path=":category" element={<Category/>} ></Route>
      </Routes>
   
  )
}

export default Shop