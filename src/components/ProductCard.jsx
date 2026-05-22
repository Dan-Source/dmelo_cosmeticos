export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.alt} loading="lazy" />
      </div>
    </div>
  );
}
