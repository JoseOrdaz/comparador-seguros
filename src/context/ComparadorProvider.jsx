import { createContext } from "react";

const ComparadorContext = createContext();

const ComparadorProvider = ({ children }) => {
  return (
    <ComparadorContext.Provider value={{}}>
      {children}
    </ComparadorContext.Provider>
  );
};

export { ComparadorProvider };

export default ComparadorContext;
