import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface HeroProps { 
  btnTitle?: string,
  btnClassName?: string,
  heroImg: string,
  heroAlt: string,
  heroWidth?: number,
  heroHeight?: number,
  heroDesc?: string ,
  heroBold?: string,
  heroLight?: string
}

const HeroSection: React.FC<HeroProps> = ({ 
  heroBold,
  heroLight,
  btnTitle,
  btnClassName,
  heroImg,
  heroAlt,
  heroDesc,
  heroWidth = 400,
  heroHeight = 400
}) => {
  return (
    <section
      className="flex  shrink-0 flex-row px-6   sm:px-12 lg:px-24 justify-between  items-center  mx-auto lg:h-[66vh] md:h-full h-[195px]  hero-com"
      style={{
        background: 'linear-gradient(93.23deg, #E31E24 0.65%, #7D1114 67.91%)'
      }}
    >
      {/* text content */}
      <div className="lg:w-[60%] md:w-[60%] w-[150px] text-left mt-8 lg:mt-0">
        <h1 className="text-white text-[15px] sm:text-4xl lg:text-[48px] mb-4 lg:mb-7 leading-snug">
          <span className='font-bold'>{heroBold}</span> {""}
           <span>{heroLight}</span> 
        </h1>
        <p className='font-normal text-white lg:text-lg'>{heroDesc}</p>
        <Button className={btnClassName}>{btnTitle}</Button>
      </div>

      {/* image content */}
      <div className="lg:w-1/2   mb-0 flex justify-center lg:justify-end">
        <Image
          src={heroImg}
          alt={heroAlt}
          width={heroWidth}
          height={heroHeight}
          className="object-cover"
        />
      </div>
    </section>
  )
}

export default HeroSection
