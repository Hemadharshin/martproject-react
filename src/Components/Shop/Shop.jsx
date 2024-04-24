import React, { useEffect, useState } from 'react'
import { products } from '../../assets/products'
import { RiStarSFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import { add } from '../Stores/CartSlice';
import {useDispatch} from 'react-redux'
import {toast, ToastContainer} from 'react-toastify'

const Shop = () => {
  const [category,setcategory]=useState('sofa')
  const [filteredProducts,setFilteredproducts] = useState([])
  const [search,setSearch] = useState('')
  const [data,setData] =useState(false)

  useEffect(() => {
    const filteredProduct = products.filter(product =>(category ===''|| product.category===category)&& product.productName.toLowerCase().includes(search.toLowerCase()));
    setFilteredproducts(filteredProduct);
  }, [category]);
  
  const {id} = useParams()
  const dispatch = useDispatch()
  
  const handleFilter = (value) => {
    if (value.length >= 3) {
      const filteredProducts = products.filter((product) => 
       ( product.productName.toLowerCase().startsWith(value.toLowerCase().slice(0, 3)))||  ( product.category.toLowerCase().startsWith(value.toLowerCase().slice(0, 3)))
      );
      setFilteredproducts(filteredProducts);
    } else {
      setcategory(value);
    }
  };
  
  const handleAddToCart = (ProductDetails)=>{
    dispatch(add(ProductDetails))
    setData(true)
    toast.success('Product has been added to cart')
  }

  return (
    <div>
    <div className='shopbg'>
    <h2 className='shopproduct'>Product</h2>
    </div>
   
    <div className='container'>
    <div className='row mt-5'>
    <div className='col-md-4'>
    <select  className='select' onChange={e=> handleFilter(e.target.value)}>
    <option value='Filter By Category' className='filterbycategory'>Filter By Category</option>

    <option value='sofa'>Sofa</option>
    <option value='chair'>Chair</option>
    <option value='wireless'>wireless</option>
    <option value='mobile'>mobile</option>
    <option value='watch'>Watch</option>
    </select>
    </div>
    <div className=' col-md-8'>
    <span>
        <input type='search' placeholder=   'Search...'  className='search' onChange={e=> handleFilter(e.target.value,   'search')}   /><span className='searchicon'><BiSearch /></span>
    </span>
    </div>
    </div>

   <div className='container'>
   <div className='row mt-4 bestrow'>
   {filteredProducts.map(item=>(
    <div className='col-md-4 mt-4' key={item.id}>
    <div className='card shopcard'>
    <div className='card-body'>
    <img src={item.imgUrl}  style={{height:'250px',width:'200px'}}/>
    <h4 className='shopproductname mt-3'>{item.productName}</h4>
    <h6 className="shopstar" > {
      [...Array(5)].map(star => {
        return <RiStarSFill size={30}  />
      })
    } </h6>
    <div className='container'>
    <div className='row '>
    <div className='col-md-6 mt-2'>
    <p className='shopprice'>${item.price}</p>
    </div>
    <div className='col-md-6'>
    <button className='buttonadd' onClick={()=>handleAddToCart(item)}>+</button>
    </div>
    </div>
    </div>
    </div>

</div>
    </div>
  ))}
   </div>
   </div>
   {filteredProducts.length === 0 && <h1>No Products found</h1>}
    </div>
    </div>
  )
}
export default Shop
