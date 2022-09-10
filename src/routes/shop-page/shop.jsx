import { useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import { useDispatch } from "react-redux"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../../components/category/Category"
import { fetchCategoriesStart } from "../../store/categories/categories.action"

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(()=> {dispatch(fetchCategoriesStart())}, [dispatch])

  return (
      <Routes>
        <Route index element={<CategoriesPreview/>} ></Route>
        <Route path=":category" element={<Category/>} ></Route>
      </Routes>
      
   
  )
}

export default Shop