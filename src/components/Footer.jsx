const INSTAGRAM_URL = "https://instagram.com/dmelocosmeticos";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">🌸 D.Melo Cosméticos</p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-instagram"
      >
        @dmelocosmeticos
      </a>
      <p className="footer-credit">Desenvolvido com ♥</p>
    </footer>
  );
}
