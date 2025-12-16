import "./Footer.css"; // Importamos los estilos específicos (diseño oscuro, flexbox, etc.)
import "bootstrap-icons/font/bootstrap-icons.css"; // Importamos la librería de iconos

export default function Footer() {
  return (
    // Etiqueta semántica footer que envuelve todo el pie de página
    <footer className="footer">
      
      {/* === SECCIÓN SUPERIOR (Enlaces y Contacto) === */}
      <div className="footer__top">
        
        {/* Columna 1: Enlaces para Clientes */}
        <div className="footer__col">
          <h4>Cliente</h4>
          <a>Supermercados</a>
          <a>Consejos</a>
          <a>Factura cliente</a>
        </div>

        {/* Columna 2: Enlaces para Trabajadores */}
        <div className="footer__col">
          <h4>Trabajador</h4>
          <a>Trabaja con nosotros</a>
        </div>

        {/* Columna 3: Enlaces para Proveedores */}
        <div className="footer__col">
          <h4>Proveedor</h4>
          <a>Factura-Me</a>
          <a>Portal Trinidad</a>
        </div>

        {/* Columna 4: Enlaces Institucionales (Sociedad) */}
        <div className="footer__col">
          <h4>Sociedad</h4>
          <a>Actualidad</a>
          <a>Sala de prensa</a>
          <a>Conoce Mercadona</a>
          <a>Mercadona en Portugal</a>
          <a>Cuidemos el Planeta</a>
        </div>

        {/* Columna 5: Información de Contacto y Redes Sociales */}
        <div className="footer__col footer__contact">
          
          {/* Bloque del Teléfono Gratuito */}
          <div className="footer__phone">
            <span className="image">
                <img src="/assets/call-center.png" className="img-fluid" alt="Responsive image" />
            </span>
            <span/>
            <span>800 500 220</span>
          </div>

          {/* Bloque de Iconos de Redes Sociales */}
          <div className="footer__social">
            {/* Cada <i> es un icono de Bootstrap */}
            <i className="bi bi-envelope-fill" title="Correo"></i>
            <i className="bi bi-facebook" title="Facebook"></i>
            <i className="bi bi-twitter-x" title="X / Twitter"></i>
            <i className="bi bi-youtube" title="YouTube"></i>
            <i className="bi bi-instagram" title="Instagram"></i>
            <i className="bi bi-linkedin" title="LinkedIn"></i>
          </div>
        </div>
      </div>

      {/* Enlaces legales */}
      <div className="footer__legal">
        <a>Accesibilidad</a>
        <a>Política de privacidad</a>
        <a>Política de cookies</a>
        <a>Términos y condiciones</a>
      </div>

      {/* Derechos */}
      <div className="footer__bottom">
        © Mercadona S.A. A46103834. Todos los derechos reservados.
      </div>
    </footer>
  );
}