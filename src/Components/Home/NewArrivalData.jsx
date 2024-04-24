import React, { useState } from 'react'
import {products} from '../../assets/products'
import { RiStarSFill } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
import { add } from '../Stores/CartSlice';
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { LiaHeart } from 'react-icons/lia';

function NewArrivalData() {
  const filteredProducts = products.filter(product => product.category === "mobile" || product.category === "wireless");
  console.log(filteredProducts);
  
  const [data,setData] =useState(false)

  const {id} = useParams()
  const dispatch = useDispatch()
  const ProductDetails = products.find((item)=>item.id===id)
  console.log(id)

  const handleAddToCart = (item)=>{
    dispatch(add(item))
    setData(true)
    toast.success('Product has been added to Cart')
  }

  return (   
    <div className='backgroundNewArrival'>
    <div className='container'>
    <div className='row bestrow'>
    <h2 className='mb-5'>New Arrivals </h2>
    {
      filteredProducts.map((item,index)=>(
        <div className='col-md-4 mb-3'>
        <div class="  NewCountCard">
        <Link className="new" to={`/SingleProductPage/${item.id}`}>
        <LiaHeart className='arrival' />
       <img class="card-img-top" src={item.imgUrl} className='NewArrivalimg' alt="Card image cap"/> </Link>
      
  <div class="card-body">
  <h5 class="card-title" className='NewArrivalproductname'>{item.productName}</h5>
  <h6 className="newarrivalfivestar" > {
    [...Array(5)].map(star => {
      return <RiStarSFill size={30}  />
    })
  } </h6>
  <div className='container'>
  <div className='row'>
  <div className='col-md-6 mt-2'>
  <p className='newarrivalprice'>${item.price}</p>
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
export default NewArrivalData




