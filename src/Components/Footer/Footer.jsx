import React from "react"
import { BsFillBagFill } from "react-icons/bs";
import './Footer.css'
const Footer=()=>{
  return(
<div className='foot mt-5'>
    <footer className="container" >
      <div className="row">
       <div className="col-md-3">
         <h2  ><BsFillBagFill  />Mart</h2>
         <p>lorem ipsum dolor sit arms cumque dolor labore. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
       </div>
       <div className="col-md-3">
        
       <h4>About Us</h4>
                    <p>Careers</p>
                    <p>Our Stores</p>
                    <p>Our cares</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>     
       </div>

       <div className="col-md-3">
       <h4 >Customer Care</h4>
                    <p>Help Center</p>
                    <p>How to buy</p>
                    <p>Track Your Order</p>
                    <p>Corporate & "Bulk Purchasing</p>
                    <p>Returns & Refunds</p>
       </div>

      <div className="col-md-3">
        <h4 >Contact Us</h4>
                    <p>70 Washington Square</p>
                    <p>South New York,NY 10012,</p>
                    <p>United States</p>
                    <p>Email:example@gmail.com</p>
                    <p>Phone:+1 1123 456 780</p>
      </div>
      </div>
    </footer>
    </div>
  )
}
export default Footer