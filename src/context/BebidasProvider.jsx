import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  return (
    <BebidasContext.Provider value={{}}>{children}</BebidasContext.Provider>
  );
};

BebidasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BebidasProvider };

export default BebidasContext;
