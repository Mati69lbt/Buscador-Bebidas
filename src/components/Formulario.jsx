import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import { useState } from "react";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {
  const { categorias } = useCategorias();

  const { ConsultarBebida } = useBebidas();

  const [alerta, setAlerta] = useState("");

  const [busqueda, setBusqueda] = useState({ nombre: "", categoria: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos lso Campos deben ser obligatorios");
      return;
    }
    setAlerta("");
    ConsultarBebida(busqueda);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && (
        <Alert variant="danger" className="text-center">
          {alerta}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Categoria Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Selecciona Categoria</option>
              {categorias?.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
