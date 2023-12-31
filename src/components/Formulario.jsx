import { MARCAS, YEARS, PLANES } from "../constants";
import { Fragment, useContext } from "react";
import useComparador from "../hooks/useComparador";
import Error from "./Error";

export const Formulario = () => {
  const { handleChangeDatos, datos, error,  setError } = useComparador();

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(datos).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')


  }

  return (
    <>

    {error && <Error />}
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Selecionar marca --</option>

            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value="">-- Selecionar año --</option>

            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Planes
          </label>

          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input type="radio"  name="plan" value={plan.id}  onChange={e => handleChangeDatos(e)}></input>
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 transition-colors text-white
        cursor-pointer uppercase p-3 font-bold rounded-md"
          value="Calcular seguro"
        ></input>
      </form>
    </>
  );
};
