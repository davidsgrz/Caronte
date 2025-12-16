import { Container } from "react-bootstrap";
import type { ReactNode } from "react"; // Importamos el tipo ReactNode para poder recibir componentes hijos

// Definición de las propiedades (Props) que acepta el componente
interface BackgroundTextProps {
  text: string;                  // Título principal
  breadcrumbs?: string;          // Ruta de navegación opcional (ej: "Inicio > Contacto")
  color?: "light" | "dark";      // Tema de color del texto
  alignment?: "start" | "center" | "end"; // Alineación horizontal del texto
  imageUrl?: string;             // URL para imagen de fondo
  videoUrl?: string;             // URL para video de fondo (tiene prioridad sobre la imagen)
  EsBanner?: boolean;              // Modo "banner": texto más grande y contenedor ancho
  children?: ReactNode;          // Permite insertar contenido extra (botones, descripciones) dentro del header
}

function Header({ 
  text, 
  breadcrumbs, 
  color = "dark", 
  alignment = "center", 
  imageUrl, 
  videoUrl, 
  EsBanner = false,
  children 
}: BackgroundTextProps) {
  
  // Determinamos si existe una URL de video válida para mostrar
  const hasVideo = Boolean(videoUrl && videoUrl.trim() !== "");
  
  // Lógica para alineación vertical (actualmente centrada en ambos casos, pero extensible)
  const verticalAlign = EsBanner ? "center" : "center"; 
  
  // Clases dinámicas para el contenedor del texto:
  // - Si es Hero: Ocupa todo el ancho (w-100) para permitir centrado libre y padding.
  // - Si es normal: Se limita al 50% del ancho con fondo opaco (estilo banner clásico).
  const textContainerClass = EsBanner 
    ? `hero-text px-4 text-${alignment} w-100` 
    : `text-${alignment} w-50 bg-opacity-100 rounded`;

  return (
    // Etiqueta semántica header. 
    // Si NO hay video, aplicamos la imagen de fondo via estilos en línea.
    <header
      className={`d-flex flex-column justify-content-${verticalAlign} text-${color} header-bg position-relative`}
      style={!hasVideo ? { backgroundImage: `url(${imageUrl})` } : {}}
    >
      {/* Si hay video, lo renderizamos como fondo absoluto detrás del contenido */}
      {hasVideo && (
        <video
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Contenedor principal para alinear el contenido (texto/hijos) */}
      <Container className={`d-flex flex-column h-100 justify-content-center align-items-${alignment} pb-4`}>
         <div className={textContainerClass}>
            
            {/* Renderizado condicional de las "migas de pan" */}
            {breadcrumbs && (
              <span className={`small ${color === 'light' ? 'text-white' : 'text-muted'} d-block mb-2`}>
                {breadcrumbs}
              </span>
            )}

            {/* Título: Usa clase 'display-4' (grande) si es modo Hero, o margen 0 si es normal */}
            <h1 className={EsBanner ? "display-4 fw-bold mb-3" : "m-0"}>
              {text}
            </h1>

            {/* Slot para renderizar cualquier elemento hijo pasado al componente (ej: Botón "Crea tu perfil") */}
            {children}
         </div>
      </Container>
    </header>
  );
};

export default Header;