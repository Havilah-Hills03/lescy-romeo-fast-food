"use client";

import ProductCard from "@/app/component/Product-card";
import ProductModal from "@/app/component/ProductModal";
import React, { useState } from "react";

const MainDishes: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  

 const products = [
  {
    id: 1,
    productImage: "/jollof-rice.png",
    productAlt: "Jollof Rice",
    productTitle: "Jollof Rice",
    productPrice: "₦2,500",
    productDesc:
      "A rich and smoky Nigerian classic slow-cooked in a flavorful tomato pepper base. Our jollof rice is infused with herbs and spices, delivering bold heat, deep flavor, and unforgettable aroma.",
  },
  {
    id: 2,
    productImage: "/sauce-fish.png",
    productAlt: "Romeo Special",
    productTitle: "Romeo Special",
    productPrice: "₦3,500",
    productDesc:
      "Chef’s special main dish prepared with a bold mix of spices and ingredients, delivering a satisfying and flavorful experience in every bite.",
  },
  {
    id: 3,
    productImage: "/caribbean-rice.png",
    productAlt: "Caribbean Rice",
    productTitle: "Caribbean Rice",
    productPrice: "₦3,200",
    productDesc:
      "Spicy Caribbean-style rice cooked with vibrant vegetables, aromatic herbs, and a kick of island heat.",
  },
  {
    id: 4,
    productImage: "/fried-rice.png",
    productAlt: "Fried Rice",
    productTitle: "Fried Rice",
    productPrice: "₦3,000",
    productDesc:
      "Experience the ultimate comfort food with our signature fried rice — a savory, wok-tossed masterpiece. Prepared with fragrant long-grain rice, crisp garden vegetables, fluffy scrambled eggs, and a bold touch of fresh garlic and ginger. Finished with premium soy sauce for smoky, umami richness in every bite.",
  },
  {
    id: 5,
    productImage: "/sauce-fish.png",
    productAlt: "Plantain Mendy",
    productTitle: "Plantain Mendy",
    productPrice: "₦2,800",
    productDesc:
      "Golden fried plantain served with your choice of protein, lightly seasoned and perfectly caramelized for a satisfying meal.",
  },
  {
    id: 6,
    productImage: "/sauce-fish.png",
    productAlt: "Plantain Gizzard",
    productTitle: "Plantain Gizzard",
    productPrice: "₦3,200",
    productDesc:
      "Sweet fried plantain paired with spicy, tender gizzard sautéed in peppers and seasoning — a bold street-food favorite.",
  },
  {
    id: 7,
    productImage: "/Spaghetti.png",
    productAlt: "Spaghetti",
    productTitle: "Spaghetti",
    productPrice: "₦1,500",
    productDesc:
      "Nigerian-style spaghetti cooked in a savory pepper sauce with vegetables and spices, hearty and comforting.",
  },
  {
    id: 8,
    productImage: "/sauce-fish.png",
    productAlt: "Beans",
    productTitle: "Beans",
    productPrice: "₦2,200",
    productDesc:
      "Hearty Nigerian beans stew slow-cooked with palm oil, peppers, and spices for deep, satisfying flavor.",
  },
  {
    id: 9,
    productImage: "/sauce-fish.png",
    productAlt: "Moi Moi",
    productTitle: "Moi Moi",
    productPrice: "₦2,500",
    productDesc:
      "Soft and savory steamed bean pudding made with blended peppers, onions, and seasoning.",
  },
  {
    id: 10,
    productImage: "/sauce-fish.png",
    productAlt: "Egusi Soup",
    productTitle: "Egusi Soup",
    productPrice: "₦4,000",
    productDesc:
      "Rich melon seed soup cooked with assorted meats, vegetables, and spices, traditionally served with swallow.",
  },
  {
    id: 11,
    productImage: "/sauce-fish.png",
    productAlt: "Vegetable Soup",
    productTitle: "Vegetable Soup",
    productPrice: "₦3,800",
    productDesc:
      "Nutritious vegetable soup packed with fresh local greens, meats, and traditional seasoning.",
  },
  {
    id: 12,
    productImage: "/sauce-fish.png",
    productAlt: "Afang Soup",
    productTitle: "Afang Soup",
    productPrice: "₦4,200",
    productDesc:
      "A delicious blend of afang and waterleaf cooked with rich spices and meats, deeply flavorful and satisfying.",
  },
  {
    id: 13,
    productImage: "/sauce-fish.png",
    productAlt: "Okro Soup",
    productTitle: "Okro Soup",
    productPrice: "₦3,900",
    productDesc:
      "Classic slippery okro soup prepared with assorted meats and seafood, perfect with swallow.",
  },
  {
    id: 14,
    productImage: "/sauce-fish.png",
    productAlt: "Native Soup",
    productTitle: "Native Soup",
    productPrice: "₦3,700",
    productDesc:
      "Traditional Nigerian native soup cooked with local spices and ingredients, rich in aroma and flavor.",
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

export default MainDishes;
