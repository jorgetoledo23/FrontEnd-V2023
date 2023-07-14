export default function PostIt({PostIt, fDelNota}) {
    
    const estilos = {
        card : {
            backgroundColor : PostIt.importante ? "#e77171" : "#fff",
            minWidth : '200px',
            minHeight : '200px',
            position : "relative"
        },
        btnDelete : {
            position : "absolute",
            top : "3px",
            right : "10px",
            fontSize : "30px"
        }
        
    }
    
    return <div style={estilos.card} className="card shadow m-2 p-2 col-md-3 text-center">
        <p className="card-title">{PostIt.titulo}</p>
        <p onClick={()=> { fDelNota(PostIt.titulo) }}
        style={estilos.btnDelete}><i class="bi bi-x"></i></p>
        <hr></hr>
        <p className="card-text">{PostIt.descripcion}</p>
    </div>
};
