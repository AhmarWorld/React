import "./Header.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/sales">Extra Salespage</Link>
          </li>
        </ul>
        <Link to="/guide">
          <Button
            value={"Get your free guide now"}
            width="193px"
            height="40px"
          />
        </Link>
      </nav>
    </header>
  );
}
