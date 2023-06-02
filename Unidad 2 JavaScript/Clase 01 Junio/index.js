const CLFormat = new Intl.NumberFormat('es-CL',
{
    style : 'currency',
    currency : 'CLP'
})


const numeros = [1,2,3,4,5,6]


const Productos = [{
    "Codigo" : "1",
    "Descripcion" : "Sony PlayStation 5 (All-Digital / Glacier White)",
    "Precio" : 99999,
    "UrlImagen" : "https://publicapi.solotodo.com/products/87689/picture/?width=300&height=200"
},
{
    "Codigo" : "2",
    "Descripcion" : "Nintendo Switch OLED White",
    "Precio" : 359999,
    "UrlImagen" : "https://media.solotodo.com/media/products/1473681_picture_1634002127.jpg"

},
{
    "Codigo" : "3",
    "Descripcion" : "Honor X7a (128 GB / 6 GB / Titanium Silver)",
    "Precio" : 234555,
    "UrlImagen" : "https://media.solotodo.com/media/products/1718597_picture_1675760508.jpg"

}]


const divRoot = document.getElementById('root')
const productContainer = document.getElementById('productContainer')
Productos.forEach(P =>{
    const div = document.createElement('div')
    div.classList.add('card','col-md-3', 'shadow', 'fs-5', 'p-3', 'm-3', 'text-center')
    
    const desc = document.createElement('p')
    desc.classList.add('card-title')
    desc.innerText = P.Descripcion
    desc.style.minHeight = "60px"

    const img = document.createElement('img')
    img.src = P.UrlImagen
    img.classList.add('d-block','mx-auto','img-fluid', 'm-2')
    img.style.width = "200px"
    img.style.height = "200px"
    img.style.maxHeight = "200px"

    const precio = document.createElement('p')
    precio.innerHTML = '<strong>'+ CLFormat.format(P.Precio)+'</strong>'

    const btnAdd = document.createElement('a')
    btnAdd.classList.add('btn', 'btn-outline-primary', 'col-4', 'mx-auto')
    btnAdd.innerHTML = "<i class='fa-solid fa-cart-plus me-2'></i>"
    
    btnAdd.addEventListener('click', ()=>{
        
        const divCarro = document.createElement('div')
        divCarro.classList.add('card', 'fs-5', 'p-3', 'm-3', 'text-center')
        
        const descCarro = document.createElement('p')
        descCarro.classList.add('card-title')
        descCarro.innerText = P.Descripcion
        descCarro.style.minHeight = "60px"

        const imgCarro = document.createElement('img')
        imgCarro.src = P.UrlImagen
        imgCarro.classList.add('d-block','mx-auto','img-fluid')
        imgCarro.style.width = "100px"
        imgCarro.style.height = "100px"
        imgCarro.style.maxHeight = "100px"

        const precioCarro = document.createElement('p')
        precioCarro.innerHTML = '<strong>'+ P.Precio+'</strong>'

        const cantidad = document.createElement('p')
        cantidad.id = P.Codigo
        cantidad.innerText = 1

        const btnBorrar = document.createElement('a')
        btnBorrar.classList.add('btn', 'btnBorrar', 'm-2')
        btnBorrar.innerHTML = "<i class='fa-solid fa-trash'></i>"
        btnBorrar.addEventListener('click', ()=>{
            productContainer.removeChild(divCarro)
        })


        divCarro.appendChild(imgCarro)
        divCarro.appendChild(descCarro)
        divCarro.appendChild(precioCarro)
        divCarro.appendChild(cantidad)
        divCarro.appendChild(btnBorrar)

        
        productContainer.appendChild(divCarro)
    })


    div.appendChild(desc)
    div.appendChild(img)
    div.appendChild(precio)
    div.appendChild(btnAdd)

    divRoot.appendChild(div)
})


const btnOpenCart = document.getElementById("btnOpenCart")
const divCarro = document.getElementById('carro')
btnOpenCart.addEventListener('click', ()=>{
    // if(divCarro.style.height == "80vh"){
    //     divCarro.style.height = "0vh"
    //     alert(2)
    // }else{
    //     divCarro.style.height = "80vh"
    // }
    divCarro.style.height == "80vh" ? divCarro.style.height = "0vh" : divCarro.style.height = "80vh"
})

divCarro.addEventListener('transitionstart', ()=>{
    productContainer.style.display =="block" ? productContainer.style.display = "none" : productContainer.style.display = "block"
})