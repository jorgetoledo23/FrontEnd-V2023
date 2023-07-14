import Navbar from "./componentes/Navbar";
import Producto from "./componentes/Producto";
import {useState} from "react";
import Caja from "./componentes/Caja";


function App() {

    const [numeros, setNumeros] = useState([
      {nombre : "Jhon", apellido : "Snow"}, 
      {nombre : "Jack", apellido : "Sparrow"}
    ])

    const [visible, setVisible] = useState(true)

    const objeto = { 
      display : visible ? 'block' : 'none' 
    }

    const fCambiarVisible = () => {
      setVisible(!visible)
    }

    const fAddPersona = () =>{
      const editedArray = [...numeros]
      console.log(editedArray )
      const newPersona = {nombre : "Paul", apellido : "Envy"}
      editedArray.push(newPersona)
      setNumeros(editedArray)
    }

    return (
        <div>
            <Navbar fCambiarVisible={fCambiarVisible} fAddPersona={fAddPersona} />

            <Caja>
              
            </Caja>



            
            
           
           

        </div>
    );
}

export default App;
