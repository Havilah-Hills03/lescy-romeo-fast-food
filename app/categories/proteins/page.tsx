import HeroSection from '@/app/component/Hero-section'
import React from 'react'
import Proteins from './section/proteins-cat'
import CatProduct from '@/app/Hero-page-sections/Cat-product'

const page = () => {
  return (
     <div 
      style={{
      background: 'linear-gradient(167.02deg, #E31E24 12.38%, #B0171C 18%, #7D1114 100%)'
    }}
    className='drink-cat overflow-x-hidden overflow-y-hidden'
    >
          <HeroSection 
     heroBold="Protein Delights"
heroLight="Juicy, tender, and full of flavor"
      btnTitle="Order Now"
      btnClassName="border-2 border-[#f9f9f9] lg:w-[287px] text-[#fff] hover:scale-[1.1]"
      heroImg="/fried-chicken.png"
      heroWidth={386}
      heroHeight={399}
      heroAlt="food Image"
      />
      <Proteins />
      <CatProduct />
    </div>
  )
}

export default page