import ProductCard from "./ProductCard";
import { products } from "../data/products";
import Categories from "./Categories";

export default function Catalog({ activeCategory, setActiveCategory}) {
  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="catalog">
      <h2 className="catalog-title">Nossos Produtos</h2>
      <Categories active={activeCategory} onChange={setActiveCategory} />
      <div className="catalog-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
