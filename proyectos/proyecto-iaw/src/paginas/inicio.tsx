import { Button, Form } from "react-bootstrap";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import Navb from "../componentes/navbar";

function Inicio() {
  return (
    <div>
      <Navb />
      <Header
        text=" "
        alignment="end"
        EsBanner={true}
        imageUrl="./assets/banner_mercadona_inicio.jpg"
      >
        <div className="text-start ms-auto" style={{ maxWidth: "600px" }}>
          <h1 className="display-4 fw-bold mb-3 text-dark">
            Empieza tu compra en Mercadona
          </h1>
          <p className="text-secondary mb-4">
            Introduce tu código postal y dependiendo de tu ciudad accederás a la
            nueva compra online o a la web clásica.
          </p>
          <div className="d-flex align-items-center gap-2">
            <Form.Control
              type="text"
              placeholder="Código postal"
              defaultValue="00000"
              className="py-2 border-0 shadow-sm"
              style={{ maxWidth: "150px", backgroundColor: "#f8f9fa" }}
            />
            <Button
              variant="success"
              className="fw-bold px-4 py-2"
              style={{ backgroundColor: "#00a364", border: "none" }}
            >
              ENTRAR
            </Button>
          </div>
        </div>
      </Header>
      {/* Primera seccion del contenido */}
      <section className="container-fluid py-5">
        <div className="container-md mx-auto">
          <div className="row align-items-center justify-content-evenly">
            <div className="col-lg-4 mb-4 text-start">
              <h3 className="fw-bold mb-2 fs-5 ps-5">Compra online</h3>
              <p className="text-secondary small ps-5">
                Recibe tu pedido en casa con la misma calidad y frescura de siempre.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="./assets/worker1.jpeg"
                alt="Cajera en supermercado sonriendo"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Segunda seccion del contenido */}
      <section className="container-fluid bg-light py-5">
        <div className="container-md mx-auto">
          <div className="row align-items-center justify-content-evenly">
            <div className="col-lg-4 mb-4">
              <img
                src="./assets/worker2.jpeg"
                alt="Trabajador de almacén"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-4 text-start">
              <h3 className="fw-bold mb-2 fs-5 pe-5">Nueva tienda online en algunas zonas</h3>
              <p className="text-secondary small pe-5">
                Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones. Introduce tu código postal arriba para ver si repartimos en tu zona. Si aún no llegamos, ¡apúntate y te avisamos!
              </p>
              <a href="#" className="text-success fw-semibold small">Avísame</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Inicio;
