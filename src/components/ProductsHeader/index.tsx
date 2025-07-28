import aumiauLogo from "../../assets/logos/logo-1-1.svg";
import { HeaderContainer } from "./styles";

const ProductHeader = () => (
  <HeaderContainer>
    <h4>Adicione à sua tigela</h4>
    <img src={aumiauLogo} alt="aumiau market" />
    <h4>Você tem 0 produtos adicionados...</h4>
  </HeaderContainer>
);

export default ProductHeader;
