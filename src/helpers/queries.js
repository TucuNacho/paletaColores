const URLcolores = import.meta.env.VITE_API_COLORES;

export const crearColor = async (nuevoColor) => {
  try {
    const respuesta = await fetch(URLcolores, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoColor),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const leerColor = async () => {
  try {
    const respuesta = await fetch(URLcolores);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerColorPorId = async (id) => {
  try {
    const respuesta = await fetch(URLcolores + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarColor = async (id) => {
  try {
    const respuesta = await fetch(URLcolores + `/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarColor = async (id, colorEditado) => {
  try {
    const respuesta = await fetch(URLcolores + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(colorEditado),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
