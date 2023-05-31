import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;

  display: flex;
  align-items: center;

  justify-content: space-between;

  background-color: transparent;

  padding: 5.7rem 14rem 9rem;
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 6rem;

    list-style: none;

    li {
      a {
        font: 500 2rem "Montserrat";
        color: #fff;
        text-decoration: none;
      }

      a:hover {
        color: ${({theme}) => theme.COLORS.LOGO_100};
        transition: .4s;
      }
    }
  }
`;

export const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  padding: 1.4rem 1rem;

  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
  font: 700 1.6rem "Montserrat";
`;
