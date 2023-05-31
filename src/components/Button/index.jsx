import { Container } from "./styles";

export function Button(title, loading = false, icon, ...rest ) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      <img src={icon} alt="logo de um lobo" />
      {loading ? "Carregando..." : title}
    </Container>
  );
}
