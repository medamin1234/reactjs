import Card from "react-bootstrap/Card";

export default function kaisaCards({ champion }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={champion.picture} />
      <Card.Body>
        <Card.Title>{champion.name}</Card.Title>
        <Card.Text>{champion.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
