import heroBanner from "../assets/banner-especial-namorados.jpg";
import { WHATSAPP_URL } from "../data/products";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <img src={heroBanner} alt="D.Melo Cosméticos banner" />
      </div>
      <div className="hero-content">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          💬 Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
