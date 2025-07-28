import { HeaderBar, LogoIcon } from "./styles";

import logo from "../../assets/logos/logo-1.svg";
import icon from "../../assets/icons/aumiau-icon-color.svg";

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="aumiau market" />
    <LogoIcon src={icon} alt="aumiau logo pata animal" />
    <p>Receitas aprovadas por focinhos exigentes.</p>
  </HeaderBar>
);

export default Header;
