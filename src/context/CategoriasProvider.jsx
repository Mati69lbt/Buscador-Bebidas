import { createContext } from "react";
import PropTypes from "prop-types";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  return (
    <CategoriasContext.Provider value={{}}>
      {children}
    </CategoriasContext.Provider>
  );
};

CategoriasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CategoriasProvider };

export default CategoriasContext;
