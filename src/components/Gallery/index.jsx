import { Container } from "./styles";

import astronautaA from '../../assets/img/galeria-1.png';
import astronautaB from '../../assets/img/galeria-2.png';
import astronautaC from '../../assets/img/galeria-3.png';
import astronautaD from '../../assets/img/galeria-4.png';
import astronautaE from '../../assets/img/galeria-5.png';
import astronautaF from '../../assets/img/galeria-6.png';
import astronautaG from '../../assets/img/galeria-7.png';
import astronautaH from '../../assets/img/galeria-8.png';

export function Gallery() {
  return (
    <Container>
      <ul>
        <li>
          <img src={astronautaA} alt="Foto de um astronauta" />
        </li>
        <li>
          <img src={astronautaB} alt="Foto de um astronauta" />
        </li>
        <li>
          <img src={astronautaC} alt="Foto de um astronauta" />
        </li>
        <li>
          <img src={astronautaD} alt="Foto de um astronauta" />
        </li>
        <li>
          <img src={astronautaE} alt="Foto de um astronauta" />
        </li>
        <li>
          <img src={astronautaF} alt="Foto de um astronauta" />
        </li>
        <li>
          <img src={astronautaG} alt="Foto de um astronauta" />
        </li>
        <li>
          <img src={astronautaH} alt="Foto de um astronauta" />
        </li>
      </ul>
    </Container>
  );
}
