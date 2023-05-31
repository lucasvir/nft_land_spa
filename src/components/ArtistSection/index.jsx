import { Container } from "./styles";

import { ArtistCard } from "../ArtistCard";

import avatarA from "../../assets/img/artista-1.png";
import avatarB from "../../assets/img/artista-2.png";
import avatarC from "../../assets/img/artista-3.png";
import avatarD from "../../assets/img/artista-4.png";
import avatarE from "../../assets/img/artista-5.png";
import avatarF from "../../assets/img/artista-6.png";

import arrowUpIcon from '../../assets/icon/arrow-orange.svg';

export function ArtistSection() {
  return (
    <Container>
      <h2>
        Melhores <span>Artistas</span>
      </h2>
      <div id="cards-wrapper">
        <ArtistCard
          title="Mayk Brito"
          subTitle="80 fotografias"
          img={avatarA}
        />
        <ArtistCard
          title="Mayk Brito"
          subTitle="80 fotografias"
          img={avatarB}
        />
        <ArtistCard
          title="Mayk Brito"
          subTitle="80 fotografias"
          img={avatarC}
        />
        <ArtistCard
          title="Mayk Brito"
          subTitle="80 fotografias"
          img={avatarD}
        />
        <ArtistCard
          title="Mayk Brito"
          subTitle="80 fotografias"
          img={avatarE}
        />
        <ArtistCard
          title="Mayk Brito"
          subTitle="80 fotografias"
          img={avatarF}
        />
      </div>

      <div id="artist-all">
        <a href="#">Ver todos os artistas</a>
        <img src={arrowUpIcon} alt="Íconde de seta para cima" />
      </div>
    </Container>
  );
}
