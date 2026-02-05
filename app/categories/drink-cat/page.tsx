import HeroSection from '@/app/component/Hero-section'
import CatProduct from '@/app/Hero-page-sections/Cat-product'
import React from 'react'
import DrinkCatProducts from './sections/Drink-cat-products'

const DrinkCat = () => {
  return (
    <div 
      style={{
      background: 'linear-gradient(167.02deg, #E31E24 12.38%, #B0171C 18%, #7D1114 100%)'
    }}
    className='drink-cat overflow-x-hidden overflow-y-hidden'
    >
      <HeroSection 
      heroBold="Cold Chilled Drinks"
      heroLight="Delivered in 20 minutes"
      btnTitle="Order Now"
      btnClassName="border-2 border-[#f9f9f9] lg:w-[287px] text-[#fff] hover:scale-[1.1]"
      heroImg="/packs-of-drink.png"
      heroWidth={386}
      heroHeight={399}
      heroAlt="food Image"
      />
      <DrinkCatProducts />
      <CatProduct />
    </div>
  )
}

export default DrinkCat