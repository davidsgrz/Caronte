import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function Navb() {
  return (
    <Navbar className="o-navbar-fluid py-2 shadow-sm" expand="lg" bg="white" sticky="top">
      <Container className='w-75'> 
        <Navbar.Brand href="/">
          <img
            src="/assets/logo_mercadona.png"
            alt="Mercadona"
            className="logo-img"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="/">Conócenos</Nav.Link>
            <Nav.Link href="/supermercados">Supermercados</Nav.Link>
            <Nav.Link href="/trabaja">Trabaja con nosotros</Nav.Link>
            <Nav.Link href="/at_cliente">Atención al Cliente</Nav.Link>
            
            {/* Dropdown de idioma */}
            <NavDropdown title="Idioma" id="basic-nav-dropdown" className="language-dropdown">
              <NavDropdown.Item href="#es">Español</NavDropdown.Item>
              <NavDropdown.Item href="#val">Valencià</NavDropdown.Item>
              <NavDropdown.Item href="#cat">Català</NavDropdown.Item>
              <NavDropdown.Item href="#gal">Galego</NavDropdown.Item>
              <NavDropdown.Item href="#en">English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;