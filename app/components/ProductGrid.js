import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      name: "Smart Watch",
      price: "1200",
      image: "/product.jpg"
    },
    {
      name: "Wireless Earbuds",
      price: "800",
      image: "/product.jpg"
    },
    {
      name: "Power Bank",
      price: "1500",
      image: "/product.jpg"
    }
  ];

  return (
    <section>
      <h2>🔥 Featured Products</h2>

      <div>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      <div className="product-grid">
    </section>
  );
    }
