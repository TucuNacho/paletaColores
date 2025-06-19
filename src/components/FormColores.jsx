import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState } from "react";

const FormColores = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aqui deberia agregar un nuevo color");
    setColores([...colores, color]);
    setColor("");
  };

  const borrarColor = (nombreColor) => {
    const coloresFiltrados = colores.filter((item) => item !== nombreColor);
    setColores(coloresFiltrados);
  };
  return (
    <section className="container">
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom right, #ffffffcc, #dee2e6cc)",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2>Lista de colores</h2>
        <Form
          className="d-flex align-items-center justify-content-center"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3 d-flex">
            <label htmlFor="colorInput" className="form-label mx-3">
              Seleccione un color
            </label>
            <Form.Control
              type="color"
              placeholder="Ingresa un color"
              className="me-2"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
            <Button type="submit">Añadir color</Button>
          </Form.Group>
        </Form>
      </div>

        <ListaColores
          añadirColor={colores}
          borrarColor={borrarColor}
        ></ListaColores>
    </section>
  );
};

export default FormColores;
