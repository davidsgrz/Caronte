import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './NavbarSec.css';

function NavbarSec() {
  return (
    <header className="mercadona-header font-arial bg-white">
      
      {/* === BARRA SUPERIOR (Blanca) === */}
      <div className="top-bar border-bottom">
        <Container fluid="lg" className="d-flex justify-content-between align-items-center py-3">
          
          {/* 1. Logo a la izquierda */}
          <Navbar.Brand href="/" className="d-flex align-items-center p-0 me-3">
            <img
              src="/assets/logo_mercadona.png"
              alt="Mercadona"
              className="mercadona-logo" 
            />
          </Navbar.Brand>

          {/* 2. Bloque Derecho: Dos filas (Enlaces arriba, Botón abajo) */}
          <div className="d-flex flex-column align-items-end col-derecha">
            
            {/* Fila Superior: Enlaces e Idioma */}
            <div className="d-flex align-items-center gap-3 mb-2 small-nav-row">
                <a href="/supermercados" className="text-decoration-none d-flex align-items-center gap-1 link-utilidad">
                   <i className="bi bi-geo-alt-fill text-mercadona-green"></i> 
                   <span className="d-none d-sm-inline text-secondary fw-bold">Supermercados</span>
                </a>

                <a href="/trabaja" className="text-decoration-none d-flex align-items-center gap-1 link-utilidad">
                   <i className="bi bi-briefcase-fill text-mercadona-green"></i> 
                   <span className="d-none d-sm-inline text-secondary fw-bold">Empleo</span>
                </a>

                {/* Dropdown Idioma */}
                <NavDropdown 
                  title="Español" 
                  id="lang-dropdown" 
                  align="end"
                  className="lang-selector-custom"
                >
                  <NavDropdown.Item href="#es">Español</NavDropdown.Item>
                  <NavDropdown.Item href="#en">English</NavDropdown.Item>
                </NavDropdown>
            </div>

            {/* boton de compra online */}
            <Button className="btn-compra-online rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2 shadow-none border-0">
                <i className="bi bi-cart3 fs-5"></i> 
                <span>Compra online</span>
            </Button>

          </div>
        </Container>
      </div>

      {/* el navbar debajo del principal */}
      <Navbar expand="lg" className="bottom-bar bg-mercadona-green py-0" variant="dark">
        <Container fluid="lg">
          <Navbar.Toggle aria-controls="main-navbar-nav" className="ms-auto my-2" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0 main-nav-links w-100">
              <NavDropdown title="Conócenos" id="conocenos-dropdown" className="custom-dropdown">
                <NavDropdown.Item href="#">Sobre nosotros</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Consejos" id="consejos-dropdown" className="custom-dropdown">
                <NavDropdown.Item href="#">Alimentación</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Actualidad</Nav.Link>
              <Nav.Link href="/at_cliente">Atención al Cliente</Nav.Link>
              <NavDropdown title="Cuidemos el Planeta" id="planeta-dropdown" className="custom-dropdown">
                <NavDropdown.Item href="#">Medio Ambiente</NavDropdown.Item>
              </NavDropdown>
               <Nav.Link href="#">Mercadona IT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarSec;