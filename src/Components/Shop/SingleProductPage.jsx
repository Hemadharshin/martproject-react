import React, { useState } from 'react'
import { discoutProducts, products } from '../../assets/products'
import { RiStarSFill } from "react-icons/ri";
import { useParams } from 'react-router'
import {useDispatch} from 'react-redux'
import { add } from '../Stores/CartSlice';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';


function SingleProductPage(product) {
  const [addToCart,setAddToCart] =useState(false)

  const {id} = useParams()
  const dispatch = useDispatch()
  const ProductDetails = products.find((item)=>item.id===id)
  console.log(id)
  const similarProduct = products.filter((item)=>item.category===ProductDetails.category &&
   item.id !== ProductDetails.id )

  
  const handleAddToCart = (ProductDetails)=>{
    dispatch(add(ProductDetails))
    setAddToCart(true)
    toast.success('Product added to cart')
  }

  return (
    <div>
     <div className='singleproductimg'>
     <h1 className='singleproductname'>{ProductDetails.productName}</h1>
     </div>

    <div className='container'>
    <div className='row'>
    <div className='col-md-6' >
    <img src={ProductDetails.imgUrl} className='singlepageimg' /></div>

    <div className='col-md-6'>
    <div className='singlepagecontent mt-5'>
    <h2>{ProductDetails.productName}</h2>
    <span>
    <span className='singlerating' > {
      [...Array(5)].map(star => {
        return <RiStarSFill size={30} className="fivestar" />
      })
    } </span> <span className='productdetailrating'> {ProductDetails.avgRating} ratings </span> </span>
   <br></br>

    <span >
    <span className='productdetailprice'>${ProductDetails.price}</span> <span className='productcategory'>
    category:{ProductDetails.category}</span>
    </span>
    <p className='productdescription'>{ProductDetails.shortDesc}</p>
    <button className='btnproductdetail'>1</button><br></br>
    <button className='addtocart' onClick={()=>{handleAddToCart(ProductDetails)}}> {addToCart ?
       'Added' : 'Add To Cart'}</button>
    </div>
    </div>
    </div>

    <div className='descriptionreview'>
    <span>Description</span>     <span className='productreview' >Reviews(1)</span>   
    <p>{ProductDetails.description}</p>
    </div>
    <div>


    <div className='container'>
    <div className='row bestrow'>
    <h2 className='mb-5'>You might also like </h2>
    {
      similarProduct.map((item,index)=>(
        <div className='col-md-4 mb-3'>
        <div class="card  bigCountCard">
        <Link to={`/SingleProductPage/${item.id}`}>
       
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
  <button className='buttonadd' onClick={()=>handleAddToCart(ProductDetails)}>+</button>
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
    </div>
    
    </div>
  )
}

export default SingleProductPage
