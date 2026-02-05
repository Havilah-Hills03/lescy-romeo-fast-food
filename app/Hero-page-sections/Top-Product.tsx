"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../component/Product-card";

const products = [
  {
    id: 1,
    productImage: "/sauce-fish.png",
    productAlt: "Sauce Fish",
    productTitle: "Sauce Fish",
    productPrice: "₦5,000", 
  },
  {
    id: 2,
    productImage: "/fried-rice.png",
    productAlt: "Fried Rice & Chicken",
    productTitle: "Fried Rice & Chicken",
    productPrice: "₦1,500", 
  },
  {
    id: 3,
    productImage: "/fried-chicken.png",
    productAlt: "Fried Chicken",
    productTitle: "Fried Chicken",
    productPrice: "₦3,500",
    productDesc: "Classic Nigerian jollof rice cooked in rich tomato sauce",
  },
  {
    id: 4,
    productImage: "/meat-pie.png",
    productAlt: "Meatpie",
    productTitle: "Meatpie",
    productPrice: "₦4,000",
    productDesc: "Vegetable fried rice with chicken and special seasoning",
  },
  {
    id: 5, 
     productImage: "/sauce-fish.png",
    productAlt: "Sauce Fish",
    productTitle: "Sauce Fish",
    productPrice: "₦5,000", 
  },
  {
    id: 6, 
    productImage: "/fried-rice.png",
    productAlt: "Fried Rice & Chicken",
    productTitle: "Fried Rice & Chicken",
    productPrice: "₦1,500", 
  },
  {
    id: 7,
     productImage: "/meat-pie.png",
    productAlt: "Meatpie",
    productTitle: "Meatpie",
    productPrice: "₦4,000",
    productDesc: "Vegetable fried rice with chicken and special seasoning",
  },
];

const TopProduct: React.FC = () => {
  return (
 <section 
 className="topProduct px-3 lg:px-0"
  style={{
        
        width: "100%", 
      }} 
     
 >
  <h1 className="h1 text-center pt-12 font-medium text-[20px] lg:text-[35px] md:text-[35px]" 
  >Top Products</h1>
     <div 
      className=" max-w-4xl lg:max-w-8xl  md:max-w-7xl  flex justify-center items-center my-10 px-1"
      
    >
      
      <Swiper 
        slidesPerView={2}
        navigation={true}
        loop={true} 
        onSlideChange={() => console.log("text move")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        breakpoints={{
          // 480: { slidesPerView: 2.2, spaceBetween: 2 },
          // 768: { slidesPerView: 3.2, spaceBetween: 10 }, 
          // 1200: { slidesPerView: 4.1, spaceBetween: 16 },
           0: {
      slidesPerView: 2,
      spaceBetween: 7,
    },
    480: {
      slidesPerView: 2.1,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4.2,
      spaceBetween: 40,
    },
        }}

        
      >
        
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard
              productImage={item.productImage}
              productAlt={item.productAlt}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
              // productDesc={item.productDesc}
              btn="border-2 border-[#E31E24] text-[#E31E24] font-[500] lg:px-12 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 </section>
  );
};

export default TopProduct;
