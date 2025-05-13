import './Footer.css';

export default function Footer() {
  return (
    <footer className="orange-bg">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} ChefPro - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}