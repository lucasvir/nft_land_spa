import { Container } from "./styles";

import { WeekendCard } from "../WeekendCard";

import weekImgA from "../../assets/img/astronauta-1.png";
import weekImgB from "../../assets/img/astronauta-2.png";
import weekImgC from "../../assets/img/astronauta-3.png";
import weekImgD from "../../assets/img/astronauta-4.png";

export function WeekendSection() {
  return (
    <Container>
      <h2>
        <span>Populares</span> da Semana
      </h2>
      <div id="cards">
        <div>
          <WeekendCard
            title="Astronauta 1"
            subTitle="Mayk Brito"
            points="1.50RKT"
            img={weekImgA}
          />
          <WeekendCard
            title="Astronauta 2"
            subTitle="Fulano Fulano"
            points="2.00RKT"
            img={weekImgB}
          />
        </div>

        <div id="bar"></div>

        <div>
          <WeekendCard
            title="Astronauta 3"
            subTitle="Julinho da Van"
            points="4.30RKT"
            img={weekImgC}
          />
          <WeekendCard
            title="Astronauta 4"
            subTitle="Joca Silva"
            points="3.75RKT"
            img={weekImgD}
          />
        </div>
      </div>
    </Container>
  );
}
