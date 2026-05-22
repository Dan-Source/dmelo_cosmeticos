import { WHATSAPP_URL } from "../data/products";

const INSTAGRAM_URL = "https://instagram.com/dmelocosmeticos";
const MAPS_URL = "https://maps.google.com/?q=Rua+Exemplo+123+São+Paulo+SP";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Fale Conosco</h2>
      <div className="contact-cards">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">📍</span>
          <div>
            <strong>Endereço</strong>
            <p>Rua Exemplo, 123 - São Paulo, SP</p>
          </div>
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">📸</span>
          <div>
            <strong>Instagram</strong>
            <p>@dmelocosmeticos</p>
          </div>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">💬</span>
          <div>
            <strong>WhatsApp</strong>
            <p>(89) 99999-1715</p>
          </div>
        </a>
      </div>
    </section>
  );
}
