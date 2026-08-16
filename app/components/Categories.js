export default function Categories() {
  const categories = [
    "📱 Tech Gadgets",
    "👕 Fashion",
    "🏠 Home & Living",
    "🏋️ Sports",
    "💄 Beauty",
    "🛒 Others"
  ];

  return (
    <section>
      <h2>🗂️ Shop Categories</h2>

      <div>
        {categories.map((item, index) => (
          <button key={index}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
