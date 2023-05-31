/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function ArtistCard({ img, title, subTitle }) {
  return (
    <Container>
      <img src={img} alt="Foto do artista" />
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>
    </Container>
  );
}
