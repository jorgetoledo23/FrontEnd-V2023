import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import PostIt from "./components/PostIt";
function App() {
  const [notas, setNotas] = useState([])

  const fAddNota = (titulo,desc,imp) => {
    let newNota = {
      titulo : titulo,
      descripcion : desc,
      importante : imp
    }
    let copyNotas = [...notas, newNota]
    setNotas(copyNotas)
  }

  const fDelNota = (titulo) => {
    let newArray = notas.filter(N => N.titulo !== titulo)
    setNotas(newArray)
  }

  return (
    <div>
      <Navbar />
      <Form fAddNota={fAddNota} />
      <div className="row justify-content-evenly">
        {notas.map(N => <PostIt PostIt={N} fDelNota={fDelNota} />)}
      </div>
    </div>
  );
}

export default App;
