import React from 'react'
import ServiceData from './ServiceData'
import SliderDataHome from './SliderDataHome'
import './style.css'
import BigDiscountData from './BigDiscountData'
import NewArrivalData from './NewArrivalData'
import BestSaleData from './BestSaleData'

const HomePage=()=> {
  return (
    <div>
      <SliderDataHome/>
      <ServiceData/>
      <BigDiscountData/>
      <NewArrivalData/>
      <BestSaleData/>
    </div>
  )
}
export default HomePage

