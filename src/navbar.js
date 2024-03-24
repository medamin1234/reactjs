import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Navigationbar({ cards }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value;

    if (cards.includes(inputValue)) alert("found");
    else {
      alert("not found");
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            type="search"
            id="searchInput"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
