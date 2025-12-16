import NavbarSec from '../componentes/NavbarSec';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './at_cliente.css';

function At_Cliente() {
  return (
    <div className="page-wrapper">
      <div className="content-box bg-white shadow-sm mx-auto d-flex flex-column">
        <NavbarSec />
        <div className="w-100">
          <Header
            text="Atención al Cliente"
            breadcrumbs="Inicio > Atención al Cliente"
            alignment="start"
            color="light"
            imageUrl="/assets/At_cliente.jpg"
            EsBanner={true}
          />
        </div>
        {/* Contenido Principal */}
        <div className="container py-5 flex-grow-1">
          {/* seccion parar el buscador */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <form className="d-flex shadow-sm rounded-pill overflow-hidden search-form-lg">
                <input
                  className="form-control border-0 py-3 ps-4 fs-5"
                  type="search"
                  placeholder="Escribe aquí tu pregunta"
                  aria-label="Search"
                />
                <button className="btn btn-mercadona-green px-5 fw-bold fs-5 text-white" type="submit">
                  <i className="bi bi-search me-2"></i> Buscar
                </button>
              </form>
            </div>
          </div>
          {/* seccion de soporte */}
          <div className="row text-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5 px-lg-4">
            {/* Teléfono */}
            <div className="col contact-col">
              <img src="/assets/atencion.png" alt="Teléfono" className="contact-icon mb-3" />
              <p className="text-secondary mb-1 small">Te atendemos de lunes a domingo de 7 a 22:30h, 1h menos en Canarias.</p>
              <h3 className="text-mercadona fw-bold my-1">800 500 220</h3>
              <p className="text-secondary small">(Gratuito)</p>
            </div>
            {/* WhatsApp */}
            <div className="col contact-col">
              <img src="/assets/contacta.png" alt="WhatsApp" className="contact-icon mb-3" />
              <h5 className="text-mercadona fw-bold fs-6">¡Hola soy Carol, tu asistente virtual de WhatsApp!</h5>
              <a href="#" className="text-dark text-decoration-underline small">¿En qué puedo ayudarte?</a>
            </div>
            {/* Email / Formulario */}
            <div className="col contact-col">
              <img src="/assets/sugerencia.png" alt="Email" className="contact-icon mb-3" />
              <p className="text-secondary mb-1 small">
                Haznos llegar tus comentarios a través de este <a href="#" className="fw-bold text-dark text-decoration-underline">formulario</a> o escríbenos a nuestro <a href="#" className="fw-bold text-dark text-decoration-underline">correo</a>.
              </p>
            </div>
            {/* Redes Sociales */}
            <div className="col contact-col">
              <img src="/assets/redes.png" alt="Redes Sociales" className="contact-icon mb-3" />
              <p className="text-secondary mb-1 small">También puedes contactar con nosotros desde nuestro</p>
              <p className="fw-bold text-dark small">Facebook, X, YouTube, Instagram y LinkedIn.</p>
            </div>
          </div>
          {/* Seccion de preguntas frecuentes */}
          <div className="mt-5 pt-4">
            <h3 className="text-center fw-bold mb-4">Preguntas frecuentes por temas</h3>
            <div className="row justify-content-center g-3">
              {/* Enlace supermercados */}
              <div className="col-6 col-md-4 col-lg-2">
                <a href="#" className="topic-card shadow-sm p-3 text-center rounded h-100 d-block text-decoration-none">
                  <i className="bi bi-shop fs-1 text-secondary mb-2 d-block topic-icon"></i>
                  <span className="topic-title">SUPERMERCADOS</span>
                </a>
              </div>
              {/* Enlace productos */}
              <div className="col-6 col-md-4 col-lg-2">
                <a href="#" className="topic-card shadow-sm p-3 text-center rounded h-100 d-block text-decoration-none">
                  <i className="bi bi-basket3 fs-1 text-secondary mb-2 d-block topic-icon"></i>
                  <span className="topic-title">PRODUCTOS</span>
                </a>
              </div>
              {/* Enlace compra online */}
              <div className="col-6 col-md-4 col-lg-2">
                <a href="#" className="topic-card shadow-sm p-3 text-center rounded h-100 d-block text-decoration-none">
                  <i className="bi bi-truck fs-1 text-secondary mb-2 d-block topic-icon"></i>
                  <span className="topic-title">COMPRA ONLINE Y A DOMICILIO</span>
                </a>
              </div>
              {/* Enlace medio ambiente */}
              <div className="col-6 col-md-4 col-lg-2">
                <a href="#" className="topic-card shadow-sm p-3 text-center rounded h-100 d-block text-decoration-none">
                  <i className="bi bi-globe-europe-africa fs-1 text-secondary mb-2 d-block topic-icon"></i>
                  <span className="topic-title">MEDIO AMBIENTE Y RESPONSABILIDAD</span>
                </a>
              </div>
              {/* Enlace emplao */}
              <div className="col-6 col-md-4 col-lg-2">
                <a href="#" className="topic-card shadow-sm p-3 text-center rounded h-100 d-block text-decoration-none">
                  <i className="bi bi-person-badge fs-1 text-secondary mb-2 d-block topic-icon"></i>
                  <span className="topic-title">EMPLEO</span>
                </a>
              </div>
              {/* Enlace otros temas */}
              <div className="col-6 col-md-4 col-lg-2">
                <a href="#" className="topic-card shadow-sm p-3 text-center rounded h-100 d-block text-decoration-none">
                  <i className="bi bi-chat-left-text fs-1 text-secondary mb-2 d-block topic-icon"></i>
                  <span className="topic-title">OTROS TEMAS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default At_Cliente;