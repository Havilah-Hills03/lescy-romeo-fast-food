import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Jollof Rice",
    price: "₦2,500",
    image: "/jollof.png",
    description: "Smoky Nigerian jollof rice",
  },
  {
    id: 2,
    title: "Eba & Egusi",
    price: "₦3,000",
    image: "/eba.png",
    description: "Hot eba served with rich egusi soup",
  },
];

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="border p-4 rounded hover:shadow-lg"
        >
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </Link>
      ))}
    </div>
  );
}
