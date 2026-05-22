import { WHATSAPP_NUMBER } from "../data/products";

export default function ProductCard({ product }) {
  const whatsappMsg = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%2C%20tenho%20interesse%20no%20produto%3A%20${encodeURIComponent(product.name)}`;

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <a
            href={whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn"
          >
            Pedir via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
