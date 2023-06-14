import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from "react-bootstrap";

const CustomLink = ({ to, children, ...rest })=> {
  return (
    <Nav.Link as={NavLink} to={to} {...rest}>
      {children}
    </Nav.Link>
  );
}
export default CustomLink
