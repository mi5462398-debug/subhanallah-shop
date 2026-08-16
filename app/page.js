import HeroBanner from "./components/HeroBanner";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>

      <Header /> 
    <HeroBanner />
      <Categories />

      <section>
        <h2>🔥 Featured Products</h2>

        <ProductCard
          name="Smart Gadget"
          price="999"
          image="/product.jpg"
        />

        <ProductCard
          name="Premium Product"
          price="1499"
          image="/product.jpg"
        />

      </section>

      <section>
        <h2>🆕 New Products</h2>
        <p>নতুন পণ্য খুব শীঘ্রই যুক্ত হবে।</p>
      </section>

    </main>
  );
}
