import Header from '../componentes/header';
import Footer from '../componentes/footer';
import NavbarSec from '../componentes/NavbarSec';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trabaja.css';

function Trabaja() {

  const Ofertas = [
    { title: "Tiendas", img: "/assets/thumb-tienda.jpg" },
    { title: "Bloques Logísticos", img: "/assets/thumb-logistico.jpg" },
    { title: "Mercadona Online", img: "/assets/thumb-online.jpg" },
    { title: "Oficinas", img: "/assets/thumb-oficina.jpg" }
  ];

  const Valores = [
    { 
      title: "Humildad", 
      desc: "¡Siempre podemos aprender algo nuevo! Escuchamos a los demás y reconocemos dónde podemos mejorar.",
      img: "/assets/valor_humildad.png"
    },
    { 
      title: "Esfuerzo", 
      desc: "Damos siempre lo mejor de nosotros, afrontamos nuestro día a día con ganas y pasión.",
      img: "/assets/valor_esfuerzo.png"
    },
    { 
      title: "Confianza", 
      desc: "Somos personas en las que se puede confiar, transparentes y coherentes, lo que decimos coincide con lo que hacemos.",
      img: "/assets/valor_confianza.png"
    }
  ];

  const QueOfrecemos = [
    { title: "Estabilidad económica", desc: "En Mercadona te necesitamos, nos gustaría contar contigo a largo plazo y proporcionarte estabilidad." },
    { title: "Salario competitivo", desc: "Reconocemos la dedicación de nuestros trabajadores con retribuciones competitivas y buenas condiciones laborales." },
    { title: "Progresión laboral", desc: "Aquí tienes la oportunidad de aprender y crecer profesionalmente. Creemos en tu futuro." }
  ];

  const EntraEnEquipo = [
    { icon: "bi-person-plus", text: "Crea tu perfil con toda la información" },
    { icon: "bi-search", text: "Buscamos un empleo acorde a ti" },
    { icon: "bi-telephone", text: "Nos ponemos en contacto contigo" },
    { icon: "bi-heart", text: "Si encajas, entras en nuestro equipo" }
  ];

  const Noticias = [
    { id: 1, title: "Mercadona, una apuesta firme por las personas y la formación" },
    { id: 2, title: "Mercadona, salarios por encima de la media del sector" },
    { id: 3, title: "Mercadona, destacada por ser la mejor empresa para trabajar de la distribución" }
  ];

  return (
    <div className="page-wrapper">
      <div className="content-box bg-white shadow-sm mx-auto d-flex flex-column">
        <NavbarSec />
        
        <div className="w-100">
          <Header
            text="Somos más de 100.000 talentos compartiendo un proyecto común"
            alignment="center"
            color="light"
            videoUrl="/assets/Trabaja.mp4"
            EsBanner={true}
          >
            <p className="fs-5 text-white mb-4 mx-auto" style={{ maxWidth: '700px' }}>
              Cada día surgen nuevas oportunidades. Crea tu perfil y te ayudaremos a encontrar tu puesto.
            </p>
            <button className="btn btn-mercadona-green btn-lg fw-bold rounded-1 px-4 text-white">
              CREA TU PERFIL <i className="bi bi-person-circle ms-2"></i>
            </button>
          </Header>
        </div>

        <div className="container py-5">

          {/* Sección: Nuestras ofertas */}
          <div className="mb-5 text-center">
            <h2 className="mb-4">Nuestras ofertas</h2>
            <div className="row g-4">
              {Ofertas.map((offer, index) => (
                <div className="col-md-3" key={index}>
                  <div className="offer-card rounded overflow-hidden shadow-sm h-100">
                    <img src={offer.img} alt={offer.title} className="img-fluid w-100" />
                    <div className="p-3 bg-white">
                      <h5 className="text-secondary mb-0">{offer.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección: Valores */}
          <div className="mb-5 py-4 text-center">
            <h2 className="mb-5">¿Sabes qué tenemos en común en Mercadona?</h2>
            <div className="row g-4 justify-content-center">
              {Valores.map((valor, index) => (
                <div className="col-md-4" key={index}>
                  <div className="value-card shadow h-100 bg-white rounded overflow-hidden d-flex flex-column">
                    <div className="p-4 flex-grow-1">
                      <h3 className="text-mercadona fw-bold mb-3">{valor.title}</h3>
                      <p className="text-muted small">{valor.desc}</p>
                    </div>
                    <img
                      src={valor.img}
                      alt={valor.title}
                      className="img-fluid w-100 d-block mb-0"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección: Qué te ofrecemos */}
          <div className="mb-5 py-4 text-center">
            <h2 className="mb-5">Qué te ofrecemos</h2>
            <div className="row text-center g-4">
              {QueOfrecemos.map((benefit, index) => (
                <div className={`col-md-4 px-4 ${index !== 0 ? 'border-start-md' : ''}`} key={index}>
                  <h4 className="text-mercadona fw-bold">{benefit.title}</h4>
                  <p className="text-muted mt-3">{benefit.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a href="#" className="text-mercadona fw-bold text-decoration-none small">Ver más <i className="bi bi-chevron-right"></i></a>
            </div>
          </div>

          {/* Sección: Entra en nuestro equipo */}
          <div className="mb-5 py-5 bg-light rounded-3 text-center px-3">
            <h2 className="mb-5">Entra en nuestro equipo</h2>
            <div className="row g-4 align-items-start justify-content-center process-steps">
              {EntraEnEquipo.map((step, index) => (
                <div className="col-6 col-md-3 position-relative" key={index}>
                  {/* Flecha condicional: se muestra en todos menos en el último */}
                  {index < EntraEnEquipo.length - 1 && (
                    <div className="d-none d-md-block arrow-connector">→</div>
                  )}
                  <i className={`bi ${step.icon} text-mercadona display-4`}></i>
                  <p className="mt-3 small fw-bold text-secondary">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a href="#" className="text-mercadona fw-bold text-decoration-none small">Ver más <i className="bi bi-chevron-right"></i></a>
            </div>
          </div>

          {/* Sección: Video */}
          <div className="mb-5 text-center">
            <h2 className="mb-4">Conoce nuestro día a día</h2>
            <div className="video-container w-100 rounded overflow-hidden shadow bg-dark" style={{ height: '400px' }}>
              <video className="w-100 h-100 object-fit-cover" src="/assets/video_thumbnail.mp4" controls>
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="mt-3 text-end">
              <a href="#" className="text-mercadona fw-bold text-decoration-none small">
                Ver todos los videos <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>

          {/* Sección: Noticias */}
          <div className="mb-5 text-center">
            <h2 className="mb-4">Nuestras últimas noticias</h2>
            <div className="row g-4 text-start">
              {Noticias.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className="news-card h-100">
                    <div className="position-relative overflow-hidden rounded mb-3">
                      <img src={`/assets/noticia_${item.id}.jpg`} className="img-fluid w-100" alt="Noticia" />
                    </div>
                    <p className="small fw-bold text-dark">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center py-5 bg-light rounded">
            <h3 className="text-secondary fw-normal mb-4">Regístrate para no perder ninguna oportunidad</h3>
            <button className="btn btn-mercadona-green btn-lg fw-bold rounded-1 px-5 text-white">
              CREA TU PERFIL <i className="bi bi-person-circle ms-2"></i>
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trabaja;