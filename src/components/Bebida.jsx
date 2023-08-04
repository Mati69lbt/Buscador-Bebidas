import { Button, Card, Col } from "react-bootstrap";

const Bebida = ({ bebida }) => {
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4" style={{ height: "27rem" }}>
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={bebida.strDrink}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button className="w-100 text-uppercase mt-2" variant="warning">
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
