import Image from 'next/image'
import React from 'react'
import Button from './Button'

interface productProps { 
productImage: string,
productAlt: string,
productTitle: string,
productPrice: string,
productDesc?: string,
btn?: string
}

const ProductCard:React.FC<productProps>  = ({productImage , productAlt, productTitle, productPrice, productDesc, btn}) => {
  return (
<div className="lg:w-75 lg:h-[466px] my-4 w-42 mx-auto rounded-[50px] border-[1.5px] border-[#B2B2B280] bg-white flex flex-col pro-card cursor-pointer overflow-hidden">
  
  {/* image content */}
  <div className="h-[45%] w-full flex justify-center items-center">
    <Image
      src={productImage}
      alt={productAlt}
      width={216}
      height={183}
      className="max-h-full max-w-full object-contain"
    />
  </div>

  {/* text content */}
<div className="p-4 bg-[#F9F9F9] flex flex-col  gap-2 mt-auto">
  <div>
    <p className="text-[#121212] text-xl font-normal line-clamp-1 mb-1">
      {productTitle}
    </p>

    {productDesc && (
      <p className="text-[#121212B2] font-light text-[16px] line-clamp-2 mb-2">
        {productDesc}
      </p>
    )}
  </div>

  <div className="mt-auto">
    <h5 className="text-[#121212] text-xl font-semibold mb-4">
      {productPrice}
    </h5> 
    <Button children="Order Now" className={btn} />
  </div>
</div>
</div>
  )
}

export default ProductCard  
