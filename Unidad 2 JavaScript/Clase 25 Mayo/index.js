let nombre;
let edad;

const PI = 3.1416

nombre = "Jhon"
nombre = "Snow"

const btnCambiarTitulo = document.getElementById('btnCambiarTitle') //HTML Element (object)
const h1 = document.getElementById('title')

// btnCambiarTitulo.addEventListener('click' , () => {
//     let nuevoTitulo = prompt('Ingresa nuevo titulo: ')
//     const h1 = document.getElementById('title')
//     h1.innerText = nuevoTitulo
// })

const cambiarTitulo2 = () => {
    let nuevoTitulo = prompt('Ingresa nuevo titulo: ')
    
    h1.innerText = nuevoTitulo
}


btnCambiarTitulo.addEventListener('click', cambiarTitulo2)

function cambiarTitulo() {
    let nuevoTitulo = prompt('Ingresa nuevo titulo: ')

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

const btnOcultar = document.getElementById('btnOcultar')
btnOcultar.addEventListener('click', ()=>{
    const h1 = document.getElementById('title')
    h1.style.display = 'none'
})

const btnToggle = document.getElementById('btnToggleTitulo')
btnToggle.addEventListener('click', () => {
    // if(h1.style.display == 'none'){
    //     h1.style.display = 'block'
    // }else{
    //     h1.style.display = 'none'
    // }
    //condicion ? valor si true : valor si false
    h1.style.display == 'block' ? h1.style.display = 'none' : h1.style.display = 'block'
})



//Agregar un button para ocultar el Titulo