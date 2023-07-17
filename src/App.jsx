import { ComparadorProvider } from "./context/ComparadorProvider";
import { AppSeguro } from "./components/AppSeguro";
function App() {
  return (
    <>
    <ComparadorProvider>
      <AppSeguro />
    </ComparadorProvider>
    </>
  );
}

export default App;
