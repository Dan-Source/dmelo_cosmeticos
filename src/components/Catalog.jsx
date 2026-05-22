import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function Catalog() {
  return (
    <section className="catalog">
      <h2 className="catalog-title">Galeria</h2>
      <div className="catalog-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
