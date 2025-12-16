import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import Supermercados  from "./paginas/supermercados";
import Trabaja from "./paginas/trabaja";
import AtCliente from "./paginas/at_cliente";
import Error404 from "./paginas/error404"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/supermercados" element={<Supermercados />} />
        <Route path="/trabaja" element={<Trabaja />} />
        <Route path="/at_cliente" element={<AtCliente />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App