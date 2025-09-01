import { Button, Card } from "react-bootstrap";
import { BsXCircle } from "react-icons/bs";

const ItemColores = ({ color, borrarColor, editarColorProp }) => {
  return (
    <Card
      style={{
        width: "20rem",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Card.Body className="text-center">
        <div
          style={{
            background: color.nuevoColor,
            height: "190px",
            border: "1px solid #000",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        ></div>
        <Button
          variant="outline-danger"
          onClick={() => borrarColor(color._id)}
          style={{
            backgroundColor: "rgba(139, 0, 0, 0.7)",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            backdropFilter: "blur(2px)",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          <BsXCircle /> Borrar
        </Button>
        <button
          style={{
            backgroundColor: "rgba(11, 150, 155, 0.89)",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            backdropFilter: "blur(2px)",
            padding: "5px 10px",
            margin: "5px",
            borderRadius: "5px",
          }}
          onClick={() => {
            console.log("ItemColores - color:", color);
            console.log("ItemColores - editarColor función:", editarColorProp);
            editarColorProp(color);
          }}
        >
          ✍🏻
        </button>
        <p className="text-light mt-2 fw-bold">{color.nuevoColor}</p>
      </Card.Body>
    </Card>
  );
};

export default ItemColores;
