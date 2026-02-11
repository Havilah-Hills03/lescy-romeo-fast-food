"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import CatCard from "../component/Cat-card";

const catProducts = [
  {
    id: 1,
    catImage: "/main-dishes.png",
    catAlt: "Main Dishes",
    catTitle: "Main Dishes",
    url: '/categories/main-dishes' 
  },
  {
    id: 2,
    catImage: "/proteins.png",
    catAlt: "Proteins",
    catTitle: "Proteins" ,
     url: '/categories/proteins' 
  },
  {
    id: 3,
    catImage: "/sharwama.png",
    catAlt: "Snacks",
    catTitle: "Snacks & Others",
     url: '/categories/snacks-cat' 
  },
  {
    id: 4,
    catImage: "/sharwama.png",
    catAlt: "Swallows",
    catTitle: "Swallows",
     url: '/swallow'  
  },
  {
    id: 5,
    catImage: "/sharwama.png",
    catAlt: "Birthday Cakes",
    catTitle: "Birthday Cakes",
     url: '/cakes'  
  },
  {
    id: 6,
    catImage: "/sharwama.png",
    catAlt: "Africana",
    catTitle: "Africana",
     url: '/africana'  
  },
  {
    id: 7,
    catImage: "/drink-pack.jpg",
    catAlt: "Drink",
    catTitle: "Drink",
     url: '/categories/drink-cat' 
  },
    {
    id: 8,
    catImage: "/sharwama.png",
    catAlt: "Others",
    catTitle: "Others",
     url: '/' 
  },
];

const CatProduct: React.FC = () => {
  return (
 <section 
 className="cat-pro-sec"
  style={{
        background: 'linear-gradient(0deg, #7D1114 9.03%, #E31E24 92.86%)',
        width: "100%", 
      }} 
     
 >
  <h1 className="h1 text-center pt-8 font-medium text-[20px] lg:text-[35px] md:text-[35px]" 
  >Categories</h1>
     <div 
      className=" max-w-4xl  lg:max-w-7xl flex justify-center items-center lg:h-[40vh] h-[30vh]"
      
    >
      
      <Swiper 
        slidesPerView={2.54}
        navigation={true}
        loop={true} 
        onSlideChange={() => console.log("text move")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        breakpoints={{
          480: { slidesPerView: 2.2, spaceBetween: 10 },
          768: { slidesPerView: 2.2, spaceBetween: 10 },
          1024: { slidesPerView: 6.7, spaceBetween: 65 },
        }}
      >
        
        {catProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <CatCard 
              catAltImg={item.catAlt}
              catCardTitle={item.catTitle}
              catCardImg={item.catImage}
              catLink={item.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
 </section>
  );
};

export default CatProduct;
