import { Container, Main } from "./styles";

import { Header } from "../../components/Header";
import { Gallery } from "../../components/Gallery";
import { MainSection } from "../../components/MainSection";
import { StatuSection } from "../../components/StatuSection";
import { WeekendSection } from "../../components/WeekendSection";
import { ArtistSection } from "../../components/ArtistSection";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <MainSection />

        <Gallery id="photo-galery" />

        <StatuSection />

        <WeekendSection />

        <ArtistSection />
      </Main>
      <Footer />
    </Container>
  );
}
