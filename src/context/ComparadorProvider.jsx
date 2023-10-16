import { createContext, useState } from "react";

const ComparadorContext = createContext();


const ComparadorProvider = ({ children }) => {


  const [datos, setDatos] = useState({
    marca: '',
    year:'',
    plan: ''
  })

  const [error, setError] = useState('')

  const handleChangeDatos = e => {

    setDatos({
      ...datos, 
      [e.target.name] : e.target.value
    })
    
  }


  return (
    <ComparadorContext.Provider value={{


      datos,
      handleChangeDatos,
      error,
      setError

    }}>
      {children}
    </ComparadorContext.Provider>
  );
};

export { ComparadorProvider };

export default ComparadorContext;
