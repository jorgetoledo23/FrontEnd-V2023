import { useRef } from "react"

export default function Form({ fAddNota }) {
    
    const titulo = useRef("")
    const desc = useRef("")
    const check = useRef(false)

    return <div className="m-2 p-5 col-md-3">
    <div className="mb-3">
      <label className="form-label">Post It Title</label>
      <input onChange={(e) => {titulo.current = e.target.value}}
      className="form-control" type="text" placeholder="Titulo" />
    </div>
    <div className="mb-3">
      <label className="form-label">Descripcion</label>
      <textarea onChange={(e) => {desc.current = e.target.value}}
       className="form-control" cols="3"></textarea>
    </div>
    <div className="mb-3 form-check">
      <input onChange={(e) => { check.current = e.target.checked }}
       type="checkbox" className="form-check-input"/>
      <label className="form-check-label" for="exampleCheck1">Importante</label>
    </div>
    <button onClick={() => { fAddNota(titulo.current, desc.current, check.current)  }}
    type="submit" className="btn btn-primary">Agregar Post It</button>
  </div>
};
