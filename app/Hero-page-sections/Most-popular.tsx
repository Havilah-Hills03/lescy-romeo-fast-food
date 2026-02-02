import React from 'react'
import ProductCard from '../component/Product-card';

const MostPopular: React.FC = () => {
    const products = [
  {
    id: 1,
    productImage: "/fried-chicken.png",
    productAlt: "Fried Chicken",
    productTitle: "Fried Chicken",
    productPrice: "₦5,000",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 2,
    productImage: "/fried-rice.png",
    productAlt: "Fried Rice & Chicken",
    productTitle: "Fried Rice & Chicken",
    productPrice: "₦1,500",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 3,
    productImage: "/caribbean-rice.png",
    productAlt: "Caribbean Rice & Chicken",
    productTitle: "Caribbean Rice & Chicken",
    productPrice: "₦1,500",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 4,
    productImage: "/sauce-fish.png",
    productAlt: "Sauce Fish",
    productTitle: "Sauce Fish",
    productPrice: "₦5,000",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 5,
    productImage: "/jollof-rice.png",
    productAlt: "Jollof Rice",
    productTitle: "Jollof Rice",
    productPrice: "₦1,500",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 6,
   productImage: "/fried-chicken.png",
    productAlt: "Fried Chicken",
    productTitle: "Fried Chicken",
    productPrice: "₦5,000",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 7,
   productImage: "/sauce-fish.png",
    productAlt: "Sauce Fish",
    productTitle: "Sauce Fish",
    productPrice: "₦5,000",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 8,
  productImage: "/fried-chicken.png",
    productAlt: "Fried Chicken",
    productTitle: "Fried Chicken",
    productPrice: "₦5,000",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 9,
    productImage: "/sauce-fish.png",
    productAlt: "Sauce Fish",
    productTitle: "Sauce Fish",
    productPrice: "₦5,000",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 10,
     productImage: "/caribbean-rice.png",
    productAlt: "Caribbean Rice & Chicken",
    productTitle: "Caribbean Rice & Chicken",
    productPrice: "₦1,500",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 11,
     productImage: "/fried-chicken.png",
     productAlt: "Fried Chicken",
    productTitle: "Fried Chicken",
    productPrice: "₦5,000",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  },
  {
    id: 12,
   productImage: "/jollof-rice.png",
    productAlt: "Jollof Rice",
    productTitle: "Jollof Rice",
    productPrice: "₦1,500",
    productDesc: "Spicy tomato-based sauce featuring flaked or shredded fish",
  }
];
  return (
    <section className='h-auto py-6 px-10  lg:px-18 lg:py-20 '>
     <h1 className="h1 text-center mb-19">Most Popular</h1>

    <div className='grid lg:grid-cols-4 grid-cols-2 my-10 lg:gap-x-14 gap-x-6 gap-y-10'>
        {
            products.map((item) => (
                <ProductCard 
                key={item.id}
              productImage={item.productImage}
              productAlt={item.productAlt}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
              productDesc={item.productDesc}
               btn="border border-[#E31E24] text-[#E31E24] font-[500] "
                />
            ))
        }
    </div>

    </section>
  )
}

export default MostPopular 