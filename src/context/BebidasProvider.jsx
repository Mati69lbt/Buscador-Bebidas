import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  const [modal, setModal] = useState(false);

  const [bebidaID, setbebidaID] = useState(null);

  const [receta, setReceta] = useState({});

  useEffect(() => {
    const ObtenerReceta = async () => {
      if (!bebidaID) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaID}`;

        const { data } = await axios(url);

        setReceta(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };

    ObtenerReceta();
  }, [bebidaID]);

  const ConsultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

      const { data } = await axios(url);

      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleBebidaIdCLick = (id) => {
    setbebidaID(id);
  };

  return (
    <BebidasContext.Provider
      value={{
        ConsultarBebida,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaIdCLick,
        receta,
        setReceta,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

BebidasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BebidasProvider };

export default BebidasContext;
