import flowLogo from "../../assets/flow-logo-small.svg";
import twitterLogo from "../../assets/svg/twitter.svg";
import "./style.css";

export default function Footer() {
  const EMAIL = "contato@flow.com";
  return (
    <footer>
      <div className="footerTopSection">
        <div>
          <img src={flowLogo} alt="flow" />
        </div>
        <div className="footerTopSectionRight">
          <div>
            <p>Contato</p>
            <a href="tel:+5548975311147">(48) 97531-1147</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div>
            <a href="http://twitter.com" target="_blank">
              <img src={twitterLogo} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottomSection">
        <p>© 2023 FLOW. All rights reserved.</p>
        <div className="footerBottomSectionRight">
          {/* //TODO pagina de privacidade e termos de uso */}
          <p>Política de Privacidade</p>
          <p>Termos de Uso</p>
        </div>
      </div>
    </footer>
  );
}
