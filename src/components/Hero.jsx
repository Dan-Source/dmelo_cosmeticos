import heroBanner from "../assets/banner-especial-namorados.jpg";
import { WHATSAPP_URL } from "../data/products";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <img src={heroBanner} alt="D.Melo Cosméticos banner" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">✨ Beleza que transforma</p>
        <h1 className="hero-title">
          Sua rotina de beleza começa aqui
        </h1>
        <p className="hero-tagline">
          Produtos de qualidade selecionados com amor para realçar sua beleza natural.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          💬 Fale conosco no WhatsApp
        </a>
      </div>
    </section>
  );
}
