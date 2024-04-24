import React from "react"
import { BiSolidUser } from "react-icons/bi";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Header=()=>{
    const cartdata = useSelector((state)=> state.cart);
    const samedata = Object.values(cartdata.reduce((acc, item)=>{
        if(!acc[item.id]){
            acc[item.id] = {...item,count: 0};
        }
        acc[item.id].count++;
        return acc;
    },{}))

    const totalProdutInCart = samedata.reduce((total,item)=>total+item.count,0)
   
  return(
    <div className="navhead" >
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">Mart</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link  to='/HomePage'class="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/Shop' class="nav-link active" aria-current="page" >shop</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to='/Cart'class="nav-link active" aria-current="page" >cart</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to='/user'class="nav-link active" aria-current="page"  ><BiSolidUser /></Link>
                        </li>
                        <li class="nav-item">
                            <Link  to='/IoCartSharp'class="nav-link active" aria-current="page" href="#"><IoCartSharp />
                            </Link>
                            <span className="total">{totalProdutInCart}</span>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}
export default Header