import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  const ConsultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

      const { data } = await axios(url);
      console.log(data.drinks);
      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BebidasContext.Provider value={{ ConsultarBebida, bebidas }}>
      {children}
    </BebidasContext.Provider>
  );
};

BebidasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BebidasProvider };

export default BebidasContext;
