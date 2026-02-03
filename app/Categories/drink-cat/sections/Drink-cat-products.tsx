import ProductCard from '@/app/component/Product-card';
import React from 'react' 

const DrinkCatProducts: React.FC = () => {
const products = [
  {
    id: 1,
    productImage: "/fanta.png",
    productAlt: "Fanta",
    productTitle: "Fanta",
    productPrice: "₦1000",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 2,
    productImage: "/sprite.png",
    productAlt: "Sprite",
    productTitle: "Sprite",
    productPrice: "₦1000",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 3,
    productImage: "/five-alive.png",
    productAlt: "5 alive Berry Blast",
    productTitle: "5 alive Berry Blast",
    productPrice: "₦1500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 4,
    productImage: "/5-alive-pineapple.png",
    productAlt: "5 alive Puply Orange",
    productTitle: "5 alive Puply Orange",
    productPrice: "₦1,500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 5,
    productImage: "/can-fanta.png",
    productAlt: "Can Fanta",
    productTitle: "Can Fanta",
    productPrice: "₦1,500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 6,
    productImage: "/can-coke.png",
    productAlt: "Can Coke",
    productTitle: "Can Coke",
    productPrice: "₦1,500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 7,
    productImage: "/can-sprite.png",
    productAlt: "Can Sprite",
    productTitle: "Can Sprite",
    productPrice: "₦1500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 8,
    productImage: "/can-schweppes.png",
    productAlt: "Schweppes (Pineapple)",
    productTitle: "Schweppes (Pineapple)",
    productPrice: "₦1,000",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 9,
    productImage: "/can-monster.png",
    productAlt: "Can Monster Drink",
    productTitle: "Can Monster Drink",
    productPrice: "₦1,5000",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 10,
   productImage: "/can-sprite.png",
    productAlt: "Can Sprite",
    productTitle: "Can Sprite",
    productPrice: "₦1500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 11,
   productImage: "/5-alive-pineapple.png",
    productAlt: "5 alive Puply Orange",
    productTitle: "5 alive Puply Orange",
    productPrice: "₦1,500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 12,
    productImage: "/five-alive.png",
    productAlt: "5 alive Berry Blast",
    productTitle: "5 alive Berry Blast",
    productPrice: "₦1500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
 
  {
    id: 13,
    productImage: "/can-schweppes.png",
    productAlt: "Schweppes (Pineapple)",
    productTitle: "Schweppes (Pineapple)",
    productPrice: "₦1,000",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 14,
     productImage: "/can-fanta.png",
    productAlt: "Can Fanta",
    productTitle: "Can Fanta",
    productPrice: "₦1,500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 15,
    productImage: "/can-coke.png",
    productAlt: "Can Coke",
    productTitle: "Can Coke",
    productPrice: "₦1,500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  },
  {
    id: 16,
   productImage: "/can-sprite.png",
    productAlt: "Can Sprite",
    productTitle: "Can Sprite",
    productPrice: "₦1500",
    productDesc: "Elevate your refreshment with our premium sodas for every craving",
  }
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
  )
}

export default DrinkCatProducts 