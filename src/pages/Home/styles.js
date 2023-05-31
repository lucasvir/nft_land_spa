import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url("src//assets/img/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Main = styled.main`
  padding: 0 14rem;

`;

export const Section = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 4rem;

  color: #fff;

  margin-bottom: 10rem;

  > img {
    width: 20rem;
  }

  #left-banner {
    display: flex;
    flex-direction: column;

    min-width: 41rem;

    p {
      font: 400 1.8rem "Montserrat";
      margin-bottom: 5rem;
    }
  }

  #main-banner {
    min-width: 59.6rem;

    h2 {
      font: 700 5rem "Montserrat";
    }

    span {
      color: ${({ theme }) => theme.COLORS.LOGO_100};
    }
  }
`;

export const AvatarWrapper = styled.section`
  width: 100%;

  display: flex;

  #avatars {
    display: flex;

    max-width: 22rem;

    > img:nth-child(1) {
      position: relative;
      z-index: 4;
    }

    > img:nth-child(2) {
      position: relative;
      left: -6rem;
      z-index: 3;
    }

    > img:nth-child(3) {
      position: relative;
      left: -12rem;
      z-index: 2;
    }

    > img:nth-child(4) {
      position: relative;
      left: -18rem;
      z-index: 1;
    }
  }

  #avatars-title {
    color: #fff;
    align-self: end;

    span {
      font: 700 1.8rem "Montserrat";
    }

    p {
      margin: 0;
    }
  }
`;