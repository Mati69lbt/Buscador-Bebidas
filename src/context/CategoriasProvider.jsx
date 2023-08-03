import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const { data } = await axios(url);

      setCategorias(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

CategoriasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CategoriasProvider };

export default CategoriasContext;
