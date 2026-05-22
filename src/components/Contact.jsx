import { WHATSAPP_URL, INSTAGRAM_URL, MAPS_URL } from "../data/products";

export default function Contact() {
  return (
    <section className="contact">
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
            <p><a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Rua Desembargador Amaral 1359, Corrente, Piauí</a></p>
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
            <p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@d_melocosmeticos</a></p>
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
            <p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">(89) 99999-1715</a></p>
          </div>
        </a>
      </div>
    </section>
  );
}
