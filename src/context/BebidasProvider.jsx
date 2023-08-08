import { createContext, useEffect, useState } from "react";

import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);

  const [modal, setModal] = useState(false);

  const [bebidaID, setbebidaID] = useState(null);

  const [receta, setReceta] = useState({});

  const ramdom = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      const { data } = await axios(url);

      setReceta(data.drinks[0]);
      setBebidas([]);
      handleModalClick();
    } catch (error) {
      console.log(error);
    }
  };

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

  const ConsultarBebida = async (categoria, ingrediente) => {
    try {
      let url;
      if (categoria) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`;
      } else {
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
      }

      const { data } = await axios(url);

      setBebidas(data.drinks);
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
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
        ramdom,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
