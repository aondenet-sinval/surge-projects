// Para usar NavLink com React-Bootstrap, você pode criar um componente de link
// personalizado que envolve NavLink. O componente de link personalizado
// pode usar NavLink internamente e adicionar as classes de estilo do Bootstrap aos links.
// Aqui está um exemplo de como criar um componente de link personalizado
// usando NavLink e Bootstrap:
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function CustomLink({ to, children, ...rest }) {
  return (
    <Nav.Link as={NavLink} to={to} {...rest}>
      {children}
    </Nav.Link>
  );
}

function MyNav() {
  return (
    <Nav>
      <CustomLink exact to="/" activeClassName="active">
        Home
      </CustomLink>
      <CustomLink to="/about" activeClassName="active">
        About
      </CustomLink>
      <CustomLink to="/contact" activeClassName="active">
        Contact
      </CustomLink>
    </Nav>
  );
}
// No exemplo acima, o componente CustomLink é criado para envolver NavLink e
// adicionar as classes de estilo do Bootstrap aos links. O componente CustomLink
// usa Nav.Link do Bootstrap como base e define NavLink como o componente Link
// personalizado por meio da propriedade "as". As outras propriedades passadas
// para o componente CustomLink, como "to" e "activeClassName", são passadas
// diretamente para NavLink.
