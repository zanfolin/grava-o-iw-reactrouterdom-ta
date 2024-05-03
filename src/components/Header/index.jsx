import logo from "../../assets/logo.png";
import "./styles.css";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="menu_esquerda">
        <img src={logo} alt="logo tipo do website" className="logo" />
        <h1>ETEC Maromba Gym</h1>
      </div>
      <div className="menu_direita">
        <nav>
          <ul className="itens_navegacao">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
