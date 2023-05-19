const root = document.getElementById("root")




const Productos = [
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },
    {
        "ProductId" : "1",
        "Descripcion" : "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        "Precio" : "99999",
        "Stock" : 20,
        "UrlImagen" : "https://flowbite.com/docs/images/products/apple-watch.png",
        "Valoracion" : 4.5
    },

]




//console.log(Productos)


const cargarProductos = () => {

    Productos.forEach( x => {
        
        const card = document.createElement("div")
        const img = document.createElement("img")
        //w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
        card.classList.add(["w-full", "max-w-sm", "bg-white", "border", "border-gray", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700"])
        //p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png
        img.classList.add(["p-8", "rounded-t-lg"])
        img.src = x.UrlImagen

        const descripcion = document.createElement("div")
        descripcion.innerHTML = x.Descripcion

        card.appendChild(img)
        card.appendChild(descripcion)
        root.appendChild(card)


    })    


}


cargarProductos()

