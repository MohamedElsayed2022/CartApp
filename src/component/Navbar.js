import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbarr() {
  const cart = useSelector(state => state.cart);
  const containerStyle = {
    backgroundColor: "#343a40", 
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", 
  };

  return (
    <Navbar style={containerStyle} expand="lg" fixed='top' className="bg-dark">
      <Container>
        <Link to="/" className='navbar-brand text-light' >Cart-App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav bg-light">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link text-light' >Home</Link>
            <Link to="/cart" className='nav-link text-light '>Cart({cart.length})</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
