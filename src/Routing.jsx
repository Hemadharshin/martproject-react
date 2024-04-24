import React from "react"
import { Routes,Route } from "react-router"
import HomePage from './Components/Home/HomePage'
import SingleProductPage from "./Components/Shop/SingleProductPage"
import Shop from "./Components/Shop/Shop"
import Cart from "./Components/Stores/Cart"

const Routing=()=>{
return(
     <Routes>
      <Route path='HomePage' element={<HomePage/>} />
      <Route path='Shop' element={<Shop/>} />
      <Route path='Cart' element={<Cart/>} />
      <Route path ='/SingleProductPage/:id' element={<SingleProductPage/>}/>
      <Route path='/IoCartSharp' element={<Cart />} />
     </Routes>
)
}
export default Routing