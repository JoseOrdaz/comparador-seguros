import { Formulario } from "./Formulario";

export const AppSeguro = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          Comparador de seguros de coche
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
      </main>
    </>
  );
};
