"use client";

import ProductCard from "@/app/component/Product-card";
import ProductModal from "@/app/component/ProductModal";
import React, { useState } from "react";

const BirthdayCakes: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
const products = [
  {
    id: 1,
    productImage: "/big-cake.png",
    productAlt: "Big Cake",
    productTitle: "Big Cake",
    productPrice: "₦15,000",
    productDesc:
      "A large, soft and fluffy cake baked to perfection. Rich in flavor, beautifully layered, and perfect for celebrations, birthdays, and special occasions.",
  },
  {
    id: 2,
    productImage: "/small-cake.png",
    productAlt: "Small Cake",
    productTitle: "Small Cake",
    productPrice: "₦8,000",
    productDesc:
      "A cute, delicious mini cake with a moist texture and sweet creamy taste. Perfect for personal enjoyment, small treats, or gifting someone special.",
  },
];



  return (
    <section className="py-6 lg:py-20 flex flex-col justify-center items-center">
      <div className="max-w-[1280px] mx-auto md:px-4 px-2 sm:px-6 lg:px-10 flex flex-col justify-center items-center">
        <h1 className="h1 text-center pt-8 font-medium text-[20px] lg:text-[35px] md:text-[35px] mb-10">
         Birthday Cakes
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-2 lg:gap-x-14 gap-y-8 justify-center items-center">
          {products.map((item) => (
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

export default BirthdayCakes;
