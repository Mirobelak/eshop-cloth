import {Routes, Route} from "react-router-dom"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../../components/category/Category"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase"
import {setCategories} from "../../store/categories/categories.action"


const Shop = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    const getCategoriesMap = async () => {
    const categoriesArray = await getCategoriesAndDocuments("categories")
    dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap()
}, [dispatch])

  return (
      <Routes>
        <Route index element={<CategoriesPreview/>} ></Route>
        <Route path=":category" element={<Category/>} ></Route>
      </Routes>
      
   
  )
}

export default Shop