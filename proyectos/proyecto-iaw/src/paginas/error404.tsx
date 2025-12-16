import NavbarSec from '../componentes/NavbarSec';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './error404.css';

function Error404() {
  return (
    <div className="page-wrapper error-page">
      <div className="content-box bg-white shadow-sm mx-auto d-flex flex-column min-vh-100">
        
        {/* Navbar */}
        <div className="w-100 flex-shrink-0">
             <NavbarSec />
        </div>

        {/* Contenido del error */}
        <div className="error-container text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="error-code display-1 fw-bolder text-mercadona">404</h1>
          <h2 className="error-title fw-bold mb-3">PÁGINA NO ENCONTRADA</h2>
          <p className="lead text-secondary mb-4">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <a href="/" className="btn btn-mercadona-green btn-lg fw-bold rounded-1 px-5 text-white">
            IR A LA PÁGINA PRINCIPAL <i className="bi bi-house-door-fill ms-2"></i>
          </a>
        </div>
        
        <Footer /> 
      </div>
    </div>
  );
};

export default Error404;