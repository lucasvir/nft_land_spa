import { Container, AvatarWrapper } from "./styles";

import avatarPink from "../../assets/img/artista-1.png";
import avatarWood from "../../assets/img/artista-2.png";
import avatarYellow from "../../assets/img/artista-3.png";
import avatarGray from "../../assets/img/artista-4.png";

import badge from "../../assets/img/badge.svg";


export function MainSection() {
  return (
    <Container>
      <div id="left-banner">
            <p>
              Mercado digital para colecionáveis em criptos e tokens não
              fungível (NFT). Compre, venda e descubra ativos digitais
              exclusivos para você.
            </p>
            <AvatarWrapper>
              <div id="avatars">
                <img src={avatarPink} alt="" />
                <img src={avatarWood} alt="" />
                <img src={avatarYellow} alt="" />
                <img src={avatarGray} alt="" />
              </div>
              <div id="avatars-title">
                <span>+10</span>
                <p>Artista selecionados</p>
              </div>
            </AvatarWrapper>
          </div>

          <div id="main-banner">
            <h2>
              Descubra a verdadeira arte digital e colecione diversas{" "}
              <span>NFTs</span>
            </h2>
          </div>

          <img src={badge} alt="" />
    </Container>
  )
}