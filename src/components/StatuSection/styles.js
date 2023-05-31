import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 66rem;

  display: grid;
  grid-template-columns: 15% auto;
  grid-template-rows: auto auto;

  grid-template-areas:
    "aside text"
    "aside photo";

  color: #fff;

  margin-top: 6rem;

  border-bottom: 1px solid #fff;

  #status-aside {
    grid-area: aside;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
    text-align: center;

    border-right: 1px solid ${({theme}) => theme.COLORS.SUBTITLE_100};

    justify-content: center;

    span {
      font: 700 5rem "Montserrat";
    }

    p {
      color: ${({ theme }) => theme.COLORS.SUBTITLE_100};
      font: 500 2rem "Montserrat";
    }
  }

  #status-text {
    grid-area: text;
    display: flex;
    gap: 20rem;

    padding: 2rem 6.8rem;

    font: 400 1.8rem 'Montserrat';

    > div {
      p{
        margin-bottom: 6.3rem;
      }
      
      span {
        color: ${({theme}) => theme.COLORS.LOGO_100};
      }

      a {
        text-decoration: underline;

      }
    }
  }

  #status-img {
    grid-area: photo;

    align-self: flex-end;
    width: 100%;
  }
`;
