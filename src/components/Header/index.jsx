import "./style.css";
import flowLogo from "../../assets/flow-logo-small.svg";
import ButtonLink from "../Button/ButtonLink";
import ButtonPrimary from "../Button/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };



  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <Link to="/">
        <img src={flowLogo} alt="flow logo" />
      </Link>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link href="/">Download App</Link>
          </li>
          <li>
            <Link to="/product">Nosso Produto</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <div>
        <ButtonLink onClick={() => navigate("/cadastro")}>
          Fazer cadastro
        </ButtonLink>
        <ButtonPrimary onClick={() => navigate("/login")}>Entrar</ButtonPrimary>
      </div>
    </header>
  );
}
