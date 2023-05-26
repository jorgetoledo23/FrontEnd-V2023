let nombre;
let edad;

const PI = 3.1416

nombre = "Jhon"
nombre = "Snow"

const btnCambiarTitulo = document.getElementById('btnCambiarTitle') //HTML Element (object)


// btnCambiarTitulo.addEventListener('click' , () => {
//     let nuevoTitulo = prompt('Ingresa nuevo titulo: ')
//     const h1 = document.getElementById('title')
//     h1.innerText = nuevoTitulo
// })

const cambiarTitulo2 = () => {
    let nuevoTitulo = prompt('Ingresa nuevo titulo: ')
    const h1 = document.getElementById('title')
    h1.innerText = nuevoTitulo
}


btnCambiarTitulo.addEventListener('click', cambiarTitulo2)

function cambiarTitulo() {
    let nuevoTitulo = prompt('Ingresa nuevo titulo: ')
    const h1 = document.getElementById('title')
    h1.innerText = nuevoTitulo
}

const agregarSubTitulo = () => {
    let st = prompt('Ingresa Subtitulo')
    const subtitulo = document.createElement('h3')
    subtitulo.innerHTML = "<strong>" + st + "</strong>"
    
    subtitulo.style.fontSize = "30px"
    subtitulo.style.backgroundColor = "#333"
    subtitulo.style.width = "50%"

    const body = document.getElementById('body')
    //document.body
    body.appendChild(subtitulo)
}

const btnAgregarSubtitulo = document.getElementById('btnAgregarSubtitle')
btnAgregarSubtitulo.addEventListener('click', agregarSubTitulo)



//Agregar un button para ocultar el Titulo