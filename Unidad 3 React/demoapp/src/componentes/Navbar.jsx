export default function Navbar( { fCambiarVisible, fAddPersona }) {
    console.log(fCambiarVisible)
    return (
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">React</span>
                    <button onClick={ () => { fCambiarVisible() }}
                    className="btn btn-outline-primary">Toggle Contenido</button>
                    <button onClick={ () => { fAddPersona() }}
                    className="btn btn-outline-danger">Agregar Persona</button>
                </div>
            </nav>
    )

}
