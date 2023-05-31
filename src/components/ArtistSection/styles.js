import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 15rem;
  text-align: center;

  h2 {
    font: 700 5rem "Montserrat";
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};

    span {
      color: ${({ theme }) => theme.COLORS.LOGO_100};
    }
    margin-bottom: 12rem;
  }

  #artist-all {
    margin-top: 6.2rem;
    margin-bottom: 15.6rem;
    a {
      font: 400 2rem "Montserrat";
      margin-right: 1.3rem;
    }
  }

  #cards-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 11.1rem;

    > div:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.COLORS.LOGO_100};
      transition: 0.4s;

      span {
        transition: 0.4s;
        color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
      }
    }
  }
`;
