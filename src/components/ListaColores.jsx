import ItemColores from "./ItemColores";

const ListaColores = ({ añadirColor, borrarColor,setColor, editarColorProp}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
      {añadirColor.map((color, indice) => (
        <ItemColores
          color={color}
          key={indice}
          borrarColor={borrarColor}
          setColor={setColor}
          editarColorProp={editarColorProp}
        ></ItemColores>
      ))}
    </div>
  );
};

export default ListaColores;
