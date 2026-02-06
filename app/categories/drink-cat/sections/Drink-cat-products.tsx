'use client'

import ProductCard from '@/app/component/Product-card';
import ProductModal from '@/app/component/ProductModal';
import React, { useState } from 'react' 

const DrinkCatProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

const drinks = [
  {
    id: 1,
    productImage: "/fanta.png",
    productAlt: "Fanta",
    productTitle: "Fanta",
    productPrice: "₦1,000",
    productDesc:
      "Refresh yourself with the classic orange Fanta — bubbly, sweet, and perfectly chilled for every craving.",
  },
  {
    id: 2,
    productImage: "/sprite.png",
    productAlt: "Sprite",
    productTitle: "Sprite",
    productPrice: "₦1,000",
    productDesc:
      "Crisp, clean, and refreshing — Sprite delivers that zesty lemon-lime fizz to cool you down anytime.",
  },
  {
    id: 3,
    productImage: "/five-alive.png",
    productAlt: "5 alive Berry Blast",
    productTitle: "5 alive Berry Blast",
    productPrice: "₦1,500",
    productDesc:
      "A burst of juicy berries in every sip. Sweet, fruity, and packed with flavor to quench your thirst.",
  },
  {
    id: 4,
    productImage: "/5-alive-pineapple.png",
    productAlt: "5 alive Pulpy Orange",
    productTitle: "5 alive Pulpy Orange",
    productPrice: "₦1,500",
    productDesc:
      "Natural orange pulpy goodness in a refreshing drink. Sweet, tangy, and perfect for a fast-food combo.",
  },
  {
    id: 5,
    productImage: "/can-fanta.png",
    productAlt: "Can Fanta",
    productTitle: "Can Fanta",
    productPrice: "₦1,500",
    productDesc:
      "Conveniently canned Fanta, full of bubbly orange flavor, perfect for on-the-go refreshment.",
  },
  {
    id: 6,
    productImage: "/can-coke.png",
    productAlt: "Can Coke",
    productTitle: "Can Coke",
    productPrice: "₦1,500",
    productDesc:
      "Classic Coca-Cola in a can — rich, fizzy, and the ultimate complement to any meal.",
  },
  {
    id: 7,
    productImage: "/can-sprite.png",
    productAlt: "Can Sprite",
    productTitle: "Can Sprite",
    productPrice: "₦1,500",
    productDesc:
      "Refreshing Sprite in a convenient can, zesty lemon-lime bubbles ready to quench your thirst.",
  },
  {
    id: 8,
    productImage: "/can-schweppes.png",
    productAlt: "Schweppes (Pineapple)",
    productTitle: "Schweppes (Pineapple)",
    productPrice: "₦1,000",
    productDesc:
      "Exotic pineapple Schweppes with crisp carbonation — a tropical fizz to perk up your meal.",
  },
  {
    id: 9,
    productImage: "/can-monster.png",
    productAlt: "Can Monster Drink",
    productTitle: "Can Monster Drink",
    productPrice: "₦1,500",
    productDesc:
      "Energy-packed Monster Drink in a can — bold, powerful, and ready to fuel your fast-food adventure.",
  },
  {
    id: 10,
    productImage: "/can-sprite.png",
    productAlt: "Can Sprite",
    productTitle: "Can Sprite",
    productPrice: "₦1,500",
    productDesc:
      "Crisp and refreshing lemon-lime Sprite in a handy can, perfect for pairing with your favorite dishes.",
  },
  {
    id: 11,
    productImage: "/5-alive-pineapple.png",
    productAlt: "5 alive Pulpy Orange",
    productTitle: "5 alive Pulpy Orange",
    productPrice: "₦1,500",
    productDesc:
      "Sweet, tangy, and full of real orange pulp — the perfect fruity refreshment for your meal.",
  },
  {
    id: 12,
    productImage: "/five-alive.png",
    productAlt: "5 alive Berry Blast",
    productTitle: "5 alive Berry Blast",
    productPrice: "₦1,500",
    productDesc:
      "A delightful berry mix that’s juicy, sweet, and perfect for a refreshing drink break.",
  },
  {
    id: 13,
    productImage: "/can-schweppes.png",
    productAlt: "Schweppes (Pineapple)",
    productTitle: "Schweppes (Pineapple)",
    productPrice: "₦1,000",
    productDesc:
      "Tropical pineapple flavor with crisp bubbles — Schweppes in a can for a tasty, fizzy treat.",
  },
  {
    id: 14,
    productImage: "/can-fanta.png",
    productAlt: "Can Fanta",
    productTitle: "Can Fanta",
    productPrice: "₦1,500",
    productDesc:
      "Bubbly orange Fanta in a handy can — sweet, refreshing, and ready to enjoy with your meal.",
  },
  {
    id: 15,
    productImage: "/can-coke.png",
    productAlt: "Can Coke",
    productTitle: "Can Coke",
    productPrice: "₦1,500",
    productDesc:
      "Classic Coke canned for convenience, fizzy, sweet, and perfect alongside your favorite fast foods.",
  },
  {
    id: 16,
    productImage: "/can-sprite.png",
    productAlt: "Can Sprite",
    productTitle: "Can Sprite",
    productPrice: "₦1,500",
    productDesc:
      "Refreshing Sprite in a can — zesty, fizzy, and great to cool down with your meal.",
  },
];

  return (
   <section className="py-6 lg:py-20">
  {/* Container */}
  <div className="max-w-[1280px] mx-auto md:px-4 px-2 sm:px-6 lg:px-10">
    <h1 className="h1 text-center pt-8 font-medium text-[20px] lg:text-[35px] md:text-[35px] mb-10">Drinks</h1>

    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-x-2
        lg:gap-x-14
        lg:gap-y-4
      "
    >
      {drinks.map((item) => (
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
  )
}

export default DrinkCatProducts 