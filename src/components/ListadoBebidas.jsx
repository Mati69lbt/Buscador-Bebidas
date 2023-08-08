import { Button, Row } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import Bebida from "./Bebida";

const elementosPorPagina = 8;

const ListadoBebidas = ({ paginaActual, setPaginaActual }) => {
  const { bebidas } = useBebidas();

  const totalPaginas = Math.ceil(bebidas.length / elementosPorPagina);
  const inicio = paginaActual * elementosPorPagina;
  const fin = inicio + elementosPorPagina;
  const bebidasPagina = bebidas.slice(inicio, fin);

  const avanzarPagina = () => {
    setPaginaActual((prevPagina) => Math.min(prevPagina + 1, totalPaginas - 1));
  };

  const retrocederPagina = () => {
    setPaginaActual((prevPagina) => Math.max(prevPagina - 1, 0));
  };

  return (
    <div>
      <Row className="mt-5">
        {bebidasPagina.map((bebida) => (
          <Bebida bebida={bebida} key={bebida.idDrink} />
        ))}
      </Row>
      {bebidas.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Button onClick={retrocederPagina} disabled={paginaActual === 0}>
            Anterior
          </Button>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {paginaActual + 1} de {totalPaginas}
          </span>
          <Button
            onClick={avanzarPagina}
            disabled={paginaActual === totalPaginas - 1}
          >
            Siguiente
          </Button>
        </div>
      ) : (
        <div>
          <h1 style={{ color: "#333" }}>Usage Instructions</h1>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            This page is a recipe finder for beverages, both alcoholic and
            non-alcoholic. You have 3 ways to search for recipes:
          </p>
          <ol>
            <li>
              <strong>Browse Randomly:</strong> Simply click the "Random" button
              and a random recipe will appear.
            </li>
            <li>
              <strong>Search by Ingredients:</strong> Use the dropdown menu to
              select an ingredient. Then choose the "Search by Ingredient"
              option. A list of all recipes containing that ingredient will be
              displayed. Click the "View Recipe" option for more details.
            </li>
            <li>
              <strong>Search by Categories:</strong> Similar to the previous
              option, select a category and click "View Recipe" for the desired
              beverage.
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default ListadoBebidas;
