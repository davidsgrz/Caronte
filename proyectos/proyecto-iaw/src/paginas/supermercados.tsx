import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSec from '../componentes/NavbarSec';
import Footer from '../componentes/footer';
import Header from '../componentes/header';
import '../paginas/Supermercados.css';

function Supermercados() {
  return (
    <div className="page-wrapper">
      <div className="d-flex flex-column w-75 mx-auto bg-white shadow-sm min-vh-100">
        <NavbarSec />
        <Header 
            text="Supermercados"
            breadcrumbs="Inicio > Supermercados"
            imageUrl="/assets/Supermercados.jpg"
            color="light"
            alignment="start"
        />
        {/* Contenido Principal */}
        <div className="container mt-5 mb-5 flex-grow-1">
          <div className="row justify-content-center align-items-center gy-5">
            
            {/* El buscador de la columna izquierda */}
            <div className="col-lg-8 text-center text-lg-start">
              <h2 className="fw-normal mb-1">Mercadona cuenta con 1.603 supermercados.</h2>
              <h3 className="fw-normal mb-4 text-muted">Encuentra tu Mercadona más cercano y su horario</h3>
              
              <form className="d-flex justify-content-center justify-content-lg-start mb-3">
                <div className="input-group input-group-lg w-100 shadow-sm mw-100" style={{ maxWidth: '600px' }}>
                  <input
                    type="text"
                    className="form-control border-end-0"
                    placeholder="Ciudad, código postal o dirección"
                    aria-label="Buscar"
                  />
                  <button className="btn mercadona-btn" type="button">
                    <i className="bi bi-search me-2"></i> Buscar
                  </button>
                </div>
              </form>

              <a href="#" className="location-link">
                <i className="bi bi-cursor-fill me-1"></i> Usar mi localización actual
              </a>
            </div>

            {/* post it */}
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="sticky-note shadow">
                <p className="mb-2 fs-5">
                    Descubre las tiendas que disponen de la nueva sección <strong>Listo para Comer</strong>.
                </p>
                <p className="mb-0">
                    Encuentra tu tienda <a href="#" className="text-primary fw-bold text-decoration-none">aquí</a>.
                </p>
              </div>
            </div>

          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
}

export default Supermercados;