import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import { useState } from "react";
import useBebidas from "../hooks/useBebidas";
import ing from "../Jsons/Ingredientes.json";

const Formulario = ({ setPaginaActual }) => {
  const { categorias } = useCategorias();

  const { ConsultarBebida, ramdom } = useBebidas();

  const [categoria, setCategoria] = useState("");

  const [ingrediente, setIgrediente] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPaginaActual(0);
    ConsultarBebida(categoria, ingrediente);
    setCategoria("");
    setIgrediente("");
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="button"
            onClick={ramdom}
          >
            random cocktail
          </Button>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Ingredients</Form.Label>
              <Form.Select
                id="ingrediente"
                type="text"
                placeholder="Ej: Tequila, Vodka, etc"
                name="ingrediente"
                value={ingrediente}
                onChange={(e) => setIgrediente(e.target.value)}
              >
                <option value="">- - Select an Ingredient - -</option>
                {ing.drinks.map((ingrediente, index) => (
                  <option key={index} value={ingrediente.strIngredient1}>
                    {ingrediente.strIngredient1}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Row className="justify-content-end">
              <Col md={3}>
                <Button
                  variant="danger"
                  className="text-uppercase w-100"
                  type="submit"
                  disabled={!ingrediente}
                >
                  Search by ingredients
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Drink Section</Form.Label>
              <Form.Select
                id="categoria"
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option>- - Choose a Category - -</option>
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
            <Row className="justify-content-end">
              <Col md={3}>
                <Button
                  variant="danger"
                  className="text-uppercase w-100"
                  type="submit"
                  disabled={!categoria}
                >
                  Search by category
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Formulario;
