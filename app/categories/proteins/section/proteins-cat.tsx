'use client'

import ProductCard from "@/app/component/Product-card";
import ProductModal from "@/app/component/ProductModal";
import React, { useState } from "react";

const Proteins: React.FC = () => {
   const [selectedProduct, setSelectedProduct] = useState<any>(null);
    

const proteins = [
  {
    id: 1,
    productImage: "/fried-chicken.png",
    productAlt: "Fried Chicken",
    productTitle: "Fried Chicken",
    productPrice: "₦4,500",
    productDesc:
      "Golden, crispy fried chicken seasoned with bold Nigerian spices. Crunchy on the outside, juicy and tender on the inside — a classic favorite that pairs perfectly with rice or fries.",
  },
  {
    id: 2,
    productImage: "/fried-chicken.png",
    productAlt: "Sauce Chicken",
    productTitle: "Sauce Chicken",
    productPrice: "₦4,000",
    productDesc:
      "Soft, succulent chicken simmered in a rich tomato and pepper sauce. Deeply flavorful, mildly spicy, and perfect for soaking into rice or swallow.",
  },
  {
    id: 3,
    productImage: "/sauce-fish.png",
    productAlt: "Dry Fish",
    productTitle: "Dry Fish",
    productPrice: "₦3,500",
    productDesc:
      "Smoky, well-seasoned dry fish cooked to perfection. Adds a bold traditional flavor that elevates soups, sauces, and native dishes.",
  },
  {
    id: 4,
    productImage: "/sauce-fish.png",
    productAlt: "Sauce Fish",
    productTitle: "Sauce Fish",
    productPrice: "₦4,200",
    productDesc:
      "Fresh fish gently cooked in a rich, spicy sauce made with peppers, onions, and seasoning. Tender, juicy, and bursting with flavor.",
  },
  {
    id: 5,
    productImage: "/fried-chicken.png",
    productAlt: "Turkey",
    productTitle: "Turkey",
    productPrice: "₦7,500",
    productDesc:
      "Thick, meaty turkey cuts seasoned and cooked until perfectly tender. Bold, hearty, and satisfying — ideal for those who want a filling protein option.",
  },
  {
    id: 6,
    productImage: "/fried-chicken.png",
    productAlt: "Goat Meat",
    productTitle: "Goat Meat",
    productPrice: "₦5,500",
    productDesc:
      "Tender goat meat cooked with traditional spices and peppers. Rich, slightly gamey, and deeply flavorful — a true Nigerian delicacy.",
  },
  {
    id: 7,
    productImage: "/sauce-fish.png",
    productAlt: "Cow Head",
    productTitle: "Cow Head",
    productPrice: "₦6,000",
    productDesc:
      "Well-cooked cow head delicacy prepared until soft and juicy. Packed with intense flavor and best enjoyed with soups or pepper sauce.",
  },
  {
    id: 8,
    productImage: "/sauce-fish.png",
    productAlt: "Gizzard",
    productTitle: "Gizzard",
    productPrice: "₦3,800",
    productDesc:
      "Spicy, sautéed chicken gizzard cooked with peppers and seasoning. Slightly chewy, bold, and perfect as a side or standalone meal.",
  },
  {
    id: 9,
    productImage: "/fried-chicken.png",
    productAlt: "Snail",
    productTitle: "Snail",
    productPrice: "₦5,000",
    productDesc:
      "Tender, juicy Nigerian snail cooked in a rich pepper sauce. Mildly chewy, flavorful, and considered a premium local delicacy.",
  },
  {
    id: 10,
    productImage: "/sauce-fish.png",
    productAlt: "Beef",
    productTitle: "Beef",
    productPrice: "₦4,500",
    productDesc:
      "Succulent beef pieces slow-cooked with spices until tender. Simple, satisfying, and a perfect companion for rice, soups, and swallow.",
  },
];



  return (
    <section className="py-6 lg:py-20">
      <div className="max-w-[1280px] mx-auto md:px-4 px-2 sm:px-6 lg:px-10">
        <h1 className="h1 text-center pt-8 font-medium text-[20px] lg:text-[35px] md:text-[35px] mb-10">
          Proteins
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 lg:gap-x-14 gap-y-8">
          {proteins.map((item) => (
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

export default Proteins;
