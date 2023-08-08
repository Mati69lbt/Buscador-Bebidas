import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { useState } from "react";

function App() {
  const [paginaActual, setPaginaActual] = useState(0);
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>DrinkQuest: Embark on a Flavorsome Journey</h1>
        </header>
        <Container className="mt-5">
          <Formulario setPaginaActual={setPaginaActual} />
          <ListadoBebidas
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
          />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
