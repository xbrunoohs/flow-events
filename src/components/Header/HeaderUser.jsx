import { Link, useNavigate } from "react-router-dom";
import flowLogo from "../../assets/flow-logo-small.svg";
import ButtonPrimary from "../Button/ButtonPrimary";
import "./HeaderUser.css";
import "./style.css";

export default function HeaderUser() {
  const navigate = useNavigate();
  return (
    <header>
      <Link to="/">
        <img src={flowLogo} alt="flow logo" />
      </Link>

      <div>
        <ButtonPrimary
          onClick={() => {
            //TODO desloga o usuário e volta para a home
            //TODO esvazia a stack
            navigate("/")
          }}
        >
          Sair
        </ButtonPrimary>
      </div>
    </header>
  );
}
