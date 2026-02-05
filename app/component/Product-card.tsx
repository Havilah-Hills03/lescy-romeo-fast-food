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
<div className="lg:w-[283px]  md:w-[280px]   lg:h-[466px] md:h-[466px] h-[300px]   my-4 w-[180px] mx-auto lg:rounded-[50px]  md:rounded-[50px]  rounded-[25px] border-[1.5px] border-[#B2B2B280] bg-white flex flex-col pro-card cursor-pointer overflow-hidden prodcat-com  w-full max-w-[320px] mx-auto bg-white rounded-xl p-4">
  
  {/* image content */}
 <div className="h-[45%] w-full flex items-center justify-center pt-4">
        <Image
          src={productImage}
          alt={productAlt}
          width={200}
          height={183}
          className="max-h-full max-w-full object-contain"
        />
      </div>

  {/* text content */}
<div className=" bg-[#F9F9F9] flex flex-col  gap-2 mt-auto">
  <div>
    <p className="text-[#121212] lg:text-xl md:text-xl text-[14px] font-normal line-clamp-1 mb-1">
      {productTitle}
    </p>

    {productDesc && (
      <p className="text-[#121212B2] font-light lg:text-[16px] text-[10px] line-clamp-2 lg:mb-2 md:mb-2 mb-1">
        {productDesc}
      </p>
    )}
  </div>

  <div className="mt-auto">
    <h5 className="text-[#121212] lg:text-xl md:text-xl text-[15px] font-semibold lg:mb-4 md:mb-4 mb-2"> 
      {productPrice}
    </h5> 
   <div className='mt-auto'>
     <Button children="Order Now" className={btn} />
   </div>
  </div>
</div>
</div>
  )
}

export default ProductCard  
