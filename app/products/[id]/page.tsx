interface ProductPageProps {
  params: {
    id: string;
  };
}

const products = [
  {
    id: "1",
    title: "Jollof Rice",
    price: "₦2,500",
    image: "/jollof.png",
    description: "Smoky Nigerian jollof rice",
  },
  {
    id: "2",
    title: "Eba & Egusi",
    price: "₦3,000",
    image: "/eba.png",
    description: "Hot eba served with rich egusi soup",
  },
];

export default function ProductDetails({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-6">
      <img src={product.image} alt={product.title} />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-lg">{product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}
