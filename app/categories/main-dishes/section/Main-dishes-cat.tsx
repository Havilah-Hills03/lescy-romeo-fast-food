import ProductCard from "@/app/component/Product-card";
import React from "react";

const MainDishes: React.FC = () => {
  const products = [
    {
      id: 1,
      productImage: "/jollof-rice.png",
      productAlt: "Jollof Rice",
      productTitle: "Jollof Rice",
      productPrice: "₦2,500",
      productDesc: "Classic Nigerian jollof rice cooked in rich tomato sauce",
    },
    {
      id: 2,
      productImage: "/sauce-fish.png",
      productAlt: "Romeo Special",
      productTitle: "Romeo Special",
      productPrice: "₦3,500",
      productDesc: "Chef’s special main dish with a mix of flavors",
    },
    {
      id: 3,
      productImage: "/caribbean-rice.png",
      productAlt: "Caribbean Rice",
      productTitle: "Caribbean Rice",
      productPrice: "₦3,200",
      productDesc: "Spicy Caribbean-style rice with vegetables and herbs",
    },
    {
      id: 4,
      productImage: "/fried-rice.png",
      productAlt: "Fried Rice",
      productTitle: "Fried Rice",
      productPrice: "₦3,000",
      productDesc: "Vegetable fried rice served with crispy chicken or beef",
    },
    {
      id: 5,
      productImage: "/sauce-fish.png",
      productAlt: "Plantain Monday",
      productTitle: "Plantain Monday",
      productPrice: "₦2,800",
      productDesc: "Fried plantain served with your choice of protein",
    },
    {
      id: 6,
      productImage: "/sauce-fish.png",
      productAlt: "Plantain & Gizzard",
      productTitle: "Plantain & Gizzard",
      productPrice: "₦3,200",
      productDesc: "Crispy plantain served with spicy gizzard",
    },
    {
      id: 7,
      productImage: "/sauce-fish.png",
      productAlt: "Spaghetti",
      productTitle: "Spaghetti",
      productPrice: "₦1,500",
      productDesc: "Nigerian-style spaghetti cooked with vegetables and spices",
    },
    {
      id: 8,
      productImage: "/sauce-fish.png",
      productAlt: "Beans",
      productTitle: "Beans",
      productPrice: "₦2,200",
      productDesc: "Hearty Nigerian beans stew with palm oil and spices",
    },
    {
      id: 9,
      productImage: "/sauce-fish.png",
      productAlt: "MoinMoin",
      productTitle: "MoinMoin",
      productPrice: "₦2,500",
      productDesc: "Steamed bean pudding made with peppers and onions",
    },
    {
      id: 10,
      productImage: "/sauce-fish.png",
      productAlt: "Egusi Soup",
      productTitle: "Egusi Soup",
      productPrice: "₦4,000",
      productDesc: "Rich melon seed soup served with pounded yam or fufu",
    },
    {
      id: 11,
      productImage: "/sauce-fish.png",
      productAlt: "Vegetable Soup",
      productTitle: "Vegetable Soup",
      productPrice: "₦3,800",
      productDesc: "Healthy vegetable soup with local greens and spices",
    },
    {
      id: 12,
      productImage: "/sauce-fish.png",
      productAlt: "Afang Soup",
      productTitle: "Afang Soup",
      productPrice: "₦4,200",
      productDesc: "Delicious Afang soup served with fufu or yam",
    },
    {
      id: 13,
      productImage: "/sauce-fish.png",
      productAlt: "Okro Soup",
      productTitle: "Okro Soup",
      productPrice: "₦3,900",
      productDesc: "Slippery okro soup cooked with meats and seafood",
    },
    {
      id: 14,
      productImage: "/sauce-fish.png",
      productAlt: "Native Soup",
      productTitle: "Native Soup",
      productPrice: "₦3,700",
      productDesc: "Traditional Nigerian native soup served with fufu",
    },
  ];

  return (
    <section className="py-6 lg:py-20">
      <div className="max-w-[1280px] mx-auto md:px-4 px-2 sm:px-6 lg:px-10">
        <h1 className="h1 text-center pt-8 font-medium text-[20px] lg:text-[35px] md:text-[35px] mb-10">
          Main Dishes
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 lg:gap-x-14 gap-y-8">
          {products.map((item) => (
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

export default MainDishes;
