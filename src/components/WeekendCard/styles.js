import styled from "styled-components";

export const Container = styled.div`
  max-width: 37.6rem;
  display: flex;
  flex-direction: column;

  #card-header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;

    h3 {
      font: 500 3rem "Montserrat";
      color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    }

    img {
      width: 2.7rem;
    }
  }

  #card-sub {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2.6rem;

    p {
      font: 600 2rem "Montserrat";
      color: ${({ theme }) => theme.COLORS.SUBTITLE_100};
    }

    span {
      font: 400 2rem "Montserrat";
      color: ${({ theme }) => theme.COLORS.LOGO_100};
    }
  }
`;
