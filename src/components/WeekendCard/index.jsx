/* eslint-disable react/prop-types */
import { Container } from "./styles";

import arrowUpIcon from "../../assets/icon/arrow-white.svg";

export function WeekendCard({ title, subTitle, points, img }) {
  return (
    <Container>
      <div id="card-header">
        <h3>{title}</h3>
        <img src={arrowUpIcon} alt="Icone de seta para cima" />
      </div>
      <div id="card-sub">
        <p>{subTitle}</p>
        <span>{points}</span>
      </div>
      <img src={img} alt="Foto de um astronauta" />
    </Container>
  );
}
