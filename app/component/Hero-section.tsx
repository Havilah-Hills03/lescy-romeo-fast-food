import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface HeroProps {
  heroTitle: string,
  btnTitle?: string,
  btnClassName?: string,
  heroImg: string,
  heroAlt: string,
  heroWidth?: number,
  heroHeight?: number,
  heroDesc?: string 
}

const HeroSection: React.FC<HeroProps> = ({
  heroTitle,
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
      className="flex  shrink-0 flex-row px-6 sm:px-12 lg:px-24 justify-between lg:items-center items-start mx-auto lg:h-full h-[195px]  hero-com"
      style={{
        background: 'linear-gradient(93.23deg, #E31E24 0.65%, #7D1114 67.91%)'
      }}
    >
      {/* text content */}
      <div className="lg:w-[60%] w-[150px] text-left mt-8 lg:mt-0">
        <h1 className="text-white text-[15px] sm:text-4xl lg:text-[48px] font-bold mb-4 lg:mb-7 leading-snug">
          {heroTitle}
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
