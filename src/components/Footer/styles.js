import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;

  background-color: #1e1e1e;

  #footer-head {
    display: flex;
    justify-content: space-between;
    padding: 8.2rem 8.2rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.SUBTITLE_100};

    > button {
      width: 8.8rem;
      padding: 2.8rem;
      background-color: ${({ theme }) => theme.COLORS.LOGO_100};
      border: none;
    }
  }

  #footer-mid {
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.SUBTITLE_100};
  }

  #footer-mid-left {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;

    padding: 6.1rem 8.2rem 8.2rem;

    border-right: 1px solid ${({ theme }) => theme.COLORS.SUBTITLE_100};

    h3 {
      font: 500 3rem "Montserrat";
      color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
      width: 35rem;

      span {
        color: ${({ theme }) => theme.COLORS.LOGO_100};
      }
    }

    #footer-input {
      display: flex;
      align-items: center;

      margin-top: 2.5rem;

      input {
        background-color: #000;
        height: 4.8rem;

        border: none;
        outline: none;

        font: 400 2rem "Montserrat";
        color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};

        padding-left: 1.4rem;

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.SUBTITLE_100};
        }
      }

      button {
        height: 4.8rem;

        padding: 0 2.5rem;

        border: none;
        border-radius: 0;

        font: 700 2rem "Montserrat";
        color: ${({ theme }) => theme.COLORS.TEXT_DARK};
      }
    }
  }

  #footer-mid-right {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12.8rem;

    width: 60%;

    padding: 6.1rem 8.2rem 8.2rem;

    ul {
      list-style: none;
      li {
        margin-bottom: 1.4rem;
        a {
          font: 400 2rem "Montserrat";
          color: ${({ theme }) => theme.COLORS.SUBTITLE_100};
        }

        a:hover {
          color: ${({ theme }) => theme.COLORS.LOGO_100};
          transition: 0.4s;
        }
      }

      li:first-child {
        a {
          font: 700 2rem "Montserrat";
          color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
        }
      }
    }
  }

  #footer-botton {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8rem 8.2rem;

    p {
      font: 400 2rem "Montserrat";
      color: ${({ theme }) => theme.COLORS.SUBTITLE_100};
    }

    #icon-wrapper {
      display: flex;
      gap: 5rem;

      button {
        display: flex;
        align-items: center;

        padding: 0.8rem;

        background: transparent;

        border: none;
        border-radius: 0.8rem;
      }

      button:hover {
        background-color: ${({ theme }) => theme.COLORS.LOGO_100};
        transition: 0.3s;
      }
    }
  }
`;
