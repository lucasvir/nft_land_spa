import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  text-align: center;

  margin-top: 15rem;

  h2 {
    font: 700 5rem "Montserrat";
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    margin-bottom: 15.8rem;

    span {
      color: ${({ theme }) => theme.COLORS.LOGO_100};
    }
  }

  #cards {
    display: flex;

    > div:nth-child(1) {
      width: 50%;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 5rem;
    }

    > div:nth-child(3) {
      width: 50%;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 5rem;
    }
  }

  #bar {
    border: 1px solid ${({ theme }) => theme.COLORS.SUBTITLE_100};
  }
`;
