'use client'

import ProductCard from "@/app/component/Product-card";
import ProductModal from "@/app/component/ProductModal";
import React, { useState } from "react";

const Swallow: React.FC = () => {
   const [selectedProduct, setSelectedProduct] = useState<any>(null);

const swallows = [
  {
    id: 1,
    productImage: "/semo.png",
    productAlt: "Semovita",
    productTitle: "Semovita",
    productPrice: "₦1,500",
    productDesc:
      "Soft and silky semovita made from premium wheat flour. Perfectly smooth and stretchy, it pairs beautifully with Nigerian soups like Egusi, Afang, or Okro for a comforting, hearty meal.",
  },
  {
    id: 2,
    productImage: "/swallow.png",
    productAlt: "Eba",
    productTitle: "Eba",
    productPrice: "₦2,000",
    productDesc:
      "Freshly prepared, hot, and smooth eba made from fine-grained garri. Soft yet firm enough to scoop soups with ease, making it the ultimate companion for any Nigerian stew or soup.",
  },
];


  return (
    <section className="py-6 lg:py-20">
      <div className="max-w-[1280px] mx-auto md:px-4 px-2 sm:px-6 lg:px-10 flex flex-col justify-center items-center">
        <h1 className="h1 text-center pt-8 font-medium text-[20px] lg:text-[35px] md:text-[35px] mb-10">
          Swallow Specials
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-2 lg:gap-x-14 gap-y-8 justify-center items-center swallow">
          {swallows.map((item) => (
            <ProductCard
              key={item.id}
              productImage={item.productImage}
              productAlt={item.productAlt}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
              productDesc={item.productDesc}
              btn="border border-[#E31E24] text-[#E31E24] font-[500]"
               onClick={() => setSelectedProduct(item)}
            />
          ))}
        </div>

         {selectedProduct && (
            <ProductModal
              show={true}
              handleClose={() => setSelectedProduct(null)}
              title={selectedProduct.productTitle}
              price={selectedProduct.productPrice} 
              image={selectedProduct.productImage}
              desc={selectedProduct.productDesc}
              link={`/products/${selectedProduct.id}`}
              
              
            />
          )}
      </div>
    </section>
  );
};

export default Swallow;
