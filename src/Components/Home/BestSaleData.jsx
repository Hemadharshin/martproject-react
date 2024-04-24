import React, { useState } from 'react'
import {products} from '../../assets/products'
import { RiStarSFill } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
import { add } from '../Stores/CartSlice';
import {useDispatch} from 'react-redux'
import {  toast} from 'react-toastify'
import { LiaHeart } from 'react-icons/lia';


function BestSaleData() {
  const filteredBestProducts = products.filter(product => product.category === "sofa");
  console.log(filteredBestProducts);
  
  const {id} = useParams()
  const ProductDetails = products.find((item)=>item.id===id)
  console.log(id)
  const [data,setData] =useState(false)

  const dispatch = useDispatch()
  const handleAddToCart = (item)=>{
    dispatch(add(item))
    setData(true)
    toast.success('Product has been added to Cart')
  }
  
  return (
    <div className='backgroundBestSale'>
    <div className='container'>
    <div className='row bestrow'>
    <h2 className='mb-5'>Best Sales</h2>
    {
      filteredBestProducts.map((item,index)=>(
        <div className='col-md-4 mb-3'>
        <div class="BestSaleCard">
       <Link className='best' to={`/SingleProductPage/${item.id}`}>
       <LiaHeart className='sale' />
<img class="card-img-top" src={item.imgUrl} className='BestSaleimg' alt="Card image cap"/> </Link>
<div class="card-body">
  <h5 class="card-title" className='BestSaleproductname'>{item.productName}</h5>
  <h4 className='bestsalefivestar' > {
    [...Array(5)].map(star => {
      return <RiStarSFill size={30}  />
    })
  }</h4>

<div className='container'>
<div className='row'>
<div className='col-md-6 mt-2'>
<p className='bestsaleprice'>${item.price}</p>
</div>
<div className='col-md-6'>
<button className='buttonadd' onClick={()=>handleAddToCart(item)}>+</button>
</div>
</div>
</div>

 
</div>

</div>
        </div>
      ))
    }
    </div>
    </div>
  </div>
    
  )
}

export default BestSaleData
