export default function ProductCard({name, price, image}) {
  return (
    <div>
      <img 
        src={image} 
        alt={name}
        width="200"
      />

      <h3>{name}</h3>

      <p>৳ {price}</p>

      <button>
        🛒 Add to Cart
      </button>
    </div>
  );
}
