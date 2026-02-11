"use client";

import ProductCard from "@/app/component/Product-card";
import ProductModal from "@/app/component/ProductModal";
import React, { useState } from "react";

const SnacksCat: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  

const products = [
  {
    id: 1,
    productImage: "/meat-pie.png",
    productAlt: "Meat Pie",
    productTitle: "Meat Pie",
    productPrice: "₦1,500",
    productDesc:
      "Flaky, golden pastry filled with well-seasoned minced meat, potatoes, and carrots. Baked to perfection for a rich, savory bite that never disappoints.",
  },
  {
    id: 2,
    productImage: "/meat-pie.png",
    productAlt: "Fish Pie",
    productTitle: "Fish Pie",
    productPrice: "₦1,500",
    productDesc:
      "Crispy pastry stuffed with flavorful, seasoned fish filling. Light, satisfying, and perfect for a quick snack any time of the day.",
  },
  {
    id: 3,
    productImage: "/meat-pie.png",
    productAlt: "Chicken Pie",
    productTitle: "Chicken Pie",
    productPrice: "₦1,500",
    productDesc:
      "A deliciously baked pastry filled with tender chicken chunks, vegetables, and spices — rich, savory, and filling.",
  },
  {
    id: 4,
    productImage: "/meat-pie.png",
    productAlt: "Burger",
    productTitle: "Burger",
    productPrice: "₦2,000",
    productDesc:
      "Juicy grilled burger layered with fresh lettuce, tomatoes, and our special sauce, served in a soft toasted bun for maximum flavor.",
  },
  {
    id: 5,
    productImage: "/meat-pie.png",
    productAlt: "Bread",
    productTitle: "Bread",
    productPrice: "₦1,700",
    productDesc:
      "Soft, freshly baked bread with a fluffy texture and golden crust — perfect on its own or paired with any meal.",
  },
  {
    id: 6,
    productImage: "/meat-pie.png",
    productAlt: "Fish Roll",
    productTitle: "Fish Roll",
    productPrice: "₦800",
    productDesc:
      "Crispy fried roll filled with seasoned fish, crunchy on the outside and soft on the inside — a popular street-food favorite.",
  },
  {
    id: 7,
    productImage: "/meat-pie.png",
    productAlt: "Peanuts",
    productTitle: "Peanuts",
    productPrice: "₦800",
    productDesc:
      "Crunchy roasted peanuts lightly salted for a simple, satisfying snack you can enjoy anytime.",
  },
  {
    id: 8,
    productImage: "/meat-pie.png",
    productAlt: "Chin Chin",
    productTitle: "Chin Chin",
    productPrice: "₦1,000",
    productDesc:
      "Crunchy, sweet, bite-sized pastry snacks fried to golden perfection — addictive and perfect for sharing.",
  },
  {
    id: 9,
    productImage: "/meat-pie.png",
    productAlt: "Doughnut",
    productTitle: "Doughnut",
    productPrice: "₦1,000",
    productDesc:
      "Soft and fluffy doughnut lightly glazed for a sweet, comforting treat with every bite.",
  },
  {
    id: 10,
    productImage: "/meat-pie.png",
    productAlt: "Tunisian Bread",
    productTitle: "Tunisian Bread",
    productPrice: "₦1,500",
    productDesc:
      "Deliciously baked Tunisian-style bread with a crisp crust and soft center, perfect for sandwiches or dipping.",
  },
  {
    id: 11,
    productImage: "/meat-pie.png",
    productAlt: "Meat Bread",
    productTitle: "Meat Bread",
    productPrice: "₦1,500",
    productDesc:
      "Soft baked bread generously filled with seasoned meat, delivering a rich and savory flavor in every slice.",
  },
  {
    id: 12,
    productImage: "/meat-pie.png",
    productAlt: "Popcorn",
    productTitle: "Popcorn",
    productPrice: "₦2,000",
    productDesc:
      "Freshly popped popcorn, light, crunchy, and perfectly seasoned — a fun snack for any occasion.",
  },
  {
    id: 13,
    productImage: "/meat-pie.png",
    productAlt: "Cake Slice",
    productTitle: "Cake Slice",
    productPrice: "₦2,000",
    productDesc:
      "Moist, soft cake slice baked with rich flavors and finished with a smooth frosting for a sweet, indulgent treat.",
  },
   {
    id: 14,
    productImage: "/meat-pie.png",
    productAlt: "Pizza",
    productTitle: "Pizza",
    productPrice: "₦3,500",
    productDesc:
      "Oven-baked pizza topped with rich tomato sauce, melted cheese, and delicious toppings, finished with a crispy crust and irresistible aroma.",
  },
  {
    id: 15,
    productImage: "/meat-pie.png",
    productAlt: "Shawarma",
    productTitle: "Shawarma",
    productPrice: "₦2,500",
    productDesc:
      "Warm flatbread wrapped around juicy, seasoned meat, fresh vegetables, and creamy sauce — a filling, flavorful street-food favorite.",
  },
  {
    id: 16,
    productImage: "/meat-pie.png",
    productAlt: "Small Chops",
    productTitle: "Small Chops",
    productPrice: "₦3,000",
    productDesc:
      "A tasty assortment of bite-sized snacks including puff-puff, samosa, and spring rolls — perfect for sharing or celebrations.",
  },  
];



  return (
    <section className="py-6 lg:py-20">
      <div className="max-w-[1280px] mx-auto md:px-4 px-2 sm:px-6 lg:px-10">
        <h1 className="h1 text-center pt-8 font-medium text-[20px] lg:text-[35px] md:text-[35px] mb-10">
         Snacks
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

export default SnacksCat;
