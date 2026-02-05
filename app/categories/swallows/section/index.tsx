import ProductCard from "@/app/component/Product-card";
import React from "react";

const Swallow: React.FC = () => {
  const swallows = [
    {
      id: 1,
      productImage: "/semo.png",
      productAlt: "Semovita",
      productTitle: "Semovita",
      productPrice: "₦1,500",
      productDesc: "Soft, smooth semovita perfect for all Nigerian soups",
    },
    {
  id: 2,
  productImage: "/swallow.png",
  productAlt: "Eba",
  productTitle: "Eba",
  productPrice: "₦2,000",
  productDesc: "Hot, smooth eba made from garri, perfect with Nigerian soups",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Swallow;
