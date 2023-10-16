import { useContext } from "react";

import ComparadorContext from "../context/ComparadorProvider";


const useComparador = () => {

     return useContext(ComparadorContext)
}

export default useComparador
