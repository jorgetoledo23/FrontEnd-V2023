import Producto from "./Producto"
import { useState } from "react"

export default function Caja () {

    const [numeros, setNumeros] = useState([
        {nombre : "Jhon", apellido : "Snow"}, 
        {nombre : "Jack", apellido : "Sparrow"}
      ])

        return (<div>

            { numeros.map(P => <Producto asd={P} />) }
                 

    </div>)
}