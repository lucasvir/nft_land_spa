import { Container } from "./styles";

import statusPhoto from "../../assets/img/banner.png";

export function StatuSection() {
  return (
    <Container>
      <div id="status-aside">
        <div>
          <span>10k+</span>
          <p>Artes</p>
        </div>
        <div>
          <span>200+</span>
          <p>Vendas</p>
        </div>
        <div>
          <span>20</span>
          <p>artistas</p>
        </div>
      </div>

      <div id="status-text">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            malesuada amet pretium lacus. Id potenti diam et cras odio viverra.
            Amet, <span>velit</span> ut hac sit. Enim ultricies mauris mattis nunc semper.
          </p>
          <a href="#">Lorem ipsum</a>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            malesuada amet pretium lacus. Id <span>potenti</span> diam et cras odio viverra.
            Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
          </p>
          <a href="#">Lorem ipsum</a>
        </div>
      </div>

      <img id="status-img" src={statusPhoto} alt="" />
    </Container>
  );
}
