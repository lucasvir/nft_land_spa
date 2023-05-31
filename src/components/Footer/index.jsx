import { Container } from "./styles";

import nftLogo from "../../assets/img/logo.svg";
import arrowUpBlack from "../../assets/icon/arrow-black.svg";

import instaIcon from "../../assets/icon/instagram.svg";
import youtubeIcon from "../../assets/icon/youtube.svg";
import twiiterIcon from "../../assets/icon/twitter.svg";
import emailIcon from "../../assets/icon/email.svg";

export function Footer() {
  return (
    <Container>
      <div id="footer-head">
        <img src={nftLogo} alt="" />
        <button>
          <img src={arrowUpBlack} alt="" />
        </button>
      </div>

      <div id="footer-mid">
        <div id="footer-mid-left">
          <h3>
            Fique por dentro de <span>todas as novidades</span>
          </h3>
          <div id="footer-input">
            <input type="text" placeholder="nft@email.com" />
            <button>Enviar</button>
          </div>
        </div>

        <nav id="footer-mid-right">
          <ul>
            <li>
              <a href="#">Empresa</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Time</a>
            </li>
            <li>
              <a href="#">Carreira</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Mapa</a>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Populares</a>
            </li>
            <li>
              <a href="#">Vendas</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Links</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Termos</a>
            </li>
            <li>
              <a href="#">Política</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="footer-botton">
        <p>www.nftland.com.br</p>
        <div id="icon-wrapper">
          <button>
            <a href="http://instagram.com" target="blank">
              <img src={instaIcon} alt="íconde do instagram" />
            </a>
          </button>
          <button>
            <a href="http://youtube.com" target="blank">
              <img src={youtubeIcon} alt="íconde do youtube" />
            </a>
          </button>
          <button>
            <a href="http://twitter.com" target="blank">
              <img src={twiiterIcon} alt="íconde do twiiter" />
            </a>
          </button>
          <button>
            <a href="http://gmail.com" target="blank">
              <img src={emailIcon} alt="íconde do email" />
            </a>
          </button>
        </div>
      </div>
    </Container>
  );
}
