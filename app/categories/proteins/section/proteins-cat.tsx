import ProductCard from "@/app/component/Product-card";
import React from "react";

const Proteins: React.FC = () => {
  const proteins = [
    {
      id: 1,
      productImage: "/fried-chicken.png",
      productAlt: "Fried Chicken",
      productTitle: "Fried Chicken",
      productPrice: "₦4,500",
      productDesc: "Spicy pepper chicken cooked Nigerian style",
    },
    {
      id: 2,
      productImage: "/fried-chicken.png",
      productAlt: "Sauce Chicken",
      productTitle: "Sauce Chicken",
      productPrice: "₦4,000",
      productDesc: "Tender chicken cooked in rich tomato sauce",
    },
    {
      id: 3,
      productImage: "/sauce-fish.png",
      productAlt: "Dry Fish",
      productTitle: "Dry Fish",
      productPrice: "₦3,500",
      productDesc: "Dried fish cooked to perfection",
    },
    {
      id: 4,
      productImage: "/sauce-fish.png",
      productAlt: "Sauce Fish",
      productTitle: "Sauce Fish",
      productPrice: "₦4,200",
      productDesc: "Fresh fish cooked in a flavorful sauce",
    },
    {
      id: 5,
      productImage: "/fried-chicken.png",
      productAlt: "Turkey",
      productTitle: "Turkey",
      productPrice: "₦7,500",
      productDesc: "Roasted turkey served with spices",
    },
    {
      id: 6,
      productImage: "/fried-chicken.png",
      productAlt: "Goat Meat",
      productTitle: "Goat Meat",
      productPrice: "₦5,500",
      productDesc: "Tender goat meat cooked with traditional spices",
    },
    {
      id: 7,
      productImage: "/sauce-fish.png",
      productAlt: "Cow Head",
      productTitle: "Cow Head",
      productPrice: "₦6,000",
      productDesc: "Cow head delicacy, a Nigerian favorite",
    },
    {
      id: 8,
      productImage: "/sauce-fish.png",
      productAlt: "Gizzard",
      productTitle: "Gizzard",
      productPrice: "₦3,800",
      productDesc: "Spicy gizzard, perfect as a side or main",
    },
    {
      id: 9,
      productImage: "/fried-chicken.png",
      productAlt: "Snail",
      productTitle: "Snail",
      productPrice: "₦5,000",
      productDesc: "Tender and juicy Nigerian snail",
    },
    {
      id: 10,
      productImage: "/sauce-fish.png",
      productAlt: "Beef",
      productTitle: "Beef",
      productPrice: "₦4,500",
      productDesc: "Succulent beef cooked to perfection",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proteins;
