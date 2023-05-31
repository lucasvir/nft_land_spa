import { ConnectButton, Container, Menu } from "./styles";

import nftLogo from '../../assets/img/logo.svg';
import wolfLogo from '../../assets/img/logo_wolf.svg';

export function Header() {
  return (
    <Container>
      <img src={nftLogo} alt="Logo da marca NFT Land"/>
      <Menu>
        <ul>
          <li><a href="#">Comprar NFT</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </Menu>

      <ConnectButton>
        <img src={wolfLogo} alt="logo de um lobo" />
        Conectar carteira
      </ConnectButton>
    </Container>
  )
}