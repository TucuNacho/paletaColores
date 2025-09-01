import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useEffect, useState } from "react";
import {
  borrarColor,
  crearColor,
  editarColor,
  leerColor,
} from "../helpers/queries";
import Swal from "sweetalert2";
const FormColores = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  useEffect(() => {
    obtenerColor();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const respuesta = await crearColor({ nuevoColor: color });
    if (respuesta.status === 201) {
      obtenerColor();
      setColor("");
    }
  };

  const obtenerColor = async () => {
    const respuesta = await leerColor();
    const datos = await respuesta.json();
    setColores(datos);
  };

  const borrarColores = async (id) => {
    const respuesta = await borrarColor(id);
    if (respuesta.status === 200) {
      const coloresFiltrados = colores.filter((item) => item._id !== id);
      setColores(coloresFiltrados);
      await obtenerColor();
    }
  };

  const editarColores = async (colorAEditar) => {
    Swal.fire({
      title: "Editar color",
      input: "text",
      inputLabel: "Modifica el color",
      inputValue: colorAEditar.nuevoColor,
      showCancelButton: true,
      confirmButtonText: "Guardar💾",
      cancelButtonText: "Cancelar✖️",
      confirmButtonColor: "#ff9a9e",
      cancelButtonColor: "#ff416c",
      background: "#fff",
      inputValidator: (value) => {
        if (!value || !/^#[0-9A-Fa-f]{6}$/.test(value)) {
          return "Ingresa un color válido (ejemplo: #ff0000)";
        }
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await editarColor(colorAEditar._id, {
          nuevoColor: result.value,
        })
        if (respuesta && respuesta.status === 200) {
          Swal.fire({
            title: "Editado!",
            text: "El color fue actualizado correctamente",
            icon: "success",
            confirmButtonColor: "#ff9a9e",
          });
          obtenerColor();
        }
      }
    });
  };
  return (
    <section className="container">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #ffffffcc, #dee2e6cc)",
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
        borrarColor={borrarColores}
        setColor={setColores}
        editarColorProp={editarColores}
      ></ListaColores>
    </section>
  );
};

export default FormColores;
