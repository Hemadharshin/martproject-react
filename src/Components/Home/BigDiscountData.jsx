import React, { useState } from 'react'
import {discoutProducts, products} from '../../assets/products'
import { RiStarSFill } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
import { add } from '../Stores/CartSlice';
import {useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import { LiaHeart } from 'react-icons/lia';


function BigDiscountData() {
  
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
    <div className='backgroundBigDiscount'>
      <div className='container'>
      <div className='row'>
      <h2 className='mb-5'>Big Discount </h2>
      {
        discoutProducts.map((item,index)=>(
          <div className='col-md-4 mb-3'>
          <div class="card  bigCountCard">
          <Link className='link' to={`/SingleProductPage/${item.id}`}>
          <button className='bigdiscountbtn'>{item.discount}</button>
          <LiaHeart className='heart' />
  <img class="card-img-top" src={item.imgUrl} className='bigdiscountimg' alt="Card image cap"/> </Link>
  <div class="card-body">
    <h5 class="card-title" className='bigdiscountproductname'>{item.productName}</h5>
    <h6 className="bigdiscountfivestar" > {
      [...Array(5)].map(star => {
        return <RiStarSFill size={30}  />
      })
    } </h6>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 mt-2'>
    <p className='bigdiscountprice'>${item.price}</p>
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

export default BigDiscountData
