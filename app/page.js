import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <h2>🔥 Featured Products</h2>

        <div>
          <h3>Product 1</h3>
          <p>৳ 999</p>
        </div>

        <div>
          <h3>Product 2</h3>
          <p>৳ 1499</p>
        </div>

        <div>
          <h3>Product 3</h3>
          <p>৳ 1999</p>
        </div>
      </section>

      <section>
        <h2>🆕 New Products</h2>
        <p>নতুন পণ্য খুব শীঘ্রই যুক্ত হবে।</p>
      </section>
    </main>
  );
}
