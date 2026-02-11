import HeroSection from '@/app/component/Hero-section'
import CatProduct from '@/app/Hero-page-sections/Cat-product'
import React from 'react'
import BirthdayCakes from './section'

const page = () => {
  return (
       <div 
      style={{
      background: 'linear-gradient(167.02deg, #E31E24 12.38%, #B0171C 18%, #7D1114 100%)'
    }}
    className='drink-cat overflow-x-hidden overflow-y-hidden'
    >
          <HeroSection 
   heroBold="Birthday Cakes"
heroLight="Beautifully crafted cakes made to celebrate every special moment"
      btnTitle="Order Now"
      btnClassName="border-2 border-[#f9f9f9] lg:w-[287px] text-[#fff] hover:scale-[1.1]"
      heroImg="/swallowBg.png"
      heroWidth={386}
      heroHeight={399}
      heroAlt="food Image"
      />
      <BirthdayCakes />
    <CatProduct />
    </div>

  )
}

export default page