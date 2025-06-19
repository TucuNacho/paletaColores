import { ListGroup } from "react-bootstrap";
import ItemColores from "./ItemColores";

const ListaColores = ({ añadirColor, borrarColor}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
      {añadirColor.map((color, indice) => (
        <ItemColores
          color={color}
          key={indice}
          borrarColor={borrarColor}
        ></ItemColores>
      ))}
    </div>
  );
};

export default ListaColores;
