import styled from "styled-components";

export const Container = styled.div`
  width: 35rem;
  display: flex;
  align-items: center;
  gap: 4em;

  white-space: nowrap;
  
  padding: 2.5rem 3.2rem;
  
  background-color: ${({ theme }) => theme.COLORS.CARD_100};
  
  > div {    
    display: flex;
    flex-direction: column;

    gap: 1rem;
    p {
      font: 500 2rem "Montserrat";
      color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
    }

    span {
      font: 500 2rem "Montserrat";

      color: ${({ theme }) => theme.COLORS.LOGO_100};
    }
  }
`;
