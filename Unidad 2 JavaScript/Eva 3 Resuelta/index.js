const btnAgregar = document.getElementById('btnAgregar')
const rootTable = document.getElementById('rootTable')
const spanCount = document.getElementById('count')
let count = 0

btnAgregar.addEventListener('click', () =>{
    
    count ++; spanCount.innerText = count;
    const titulo = document.getElementById('tituloCancion').value;
    const artista = document.getElementById('artistaCancion').value;
    const album = document.getElementById('albumCancion').value
    const duracion = document.getElementById('duracionCancion').value
    let fecha = new Date().toLocaleDateString()

    const tr = document.createElement('tr')

    //numero cancion
    const num = document.createElement('td')
    num.innerText = count

    //Titulo + Artista
    const tdTitulo = document.createElement('td')
    tdTitulo.innerText = titulo
    const pArtista = document.createElement('p')
    pArtista.innerHTML = '<strong>'+ artista+'</strong>'
    tdTitulo.appendChild(pArtista)

    //Album
    const tdAlbum = document.createElement('td')
    tdAlbum.innerText = album

    //Fecha
    const tdfecha = document.createElement('td')
    tdfecha.innerText = fecha

    //Duracion
    const tdDuracion = document.createElement('td')
    tdDuracion.innerText = duracion

    const tdBtn = document.createElement('td')
    const btnEliminar = document.createElement('button')
    btnEliminar.classList.add('btn')
    btnEliminar.innerHTML = '<i class="bi bi-x-circle"></i>'
    btnEliminar.addEventListener('click', () =>{
        count--
        spanCount.innerText = count
        rootTable.removeChild(tr)
        actualizarCorrelativos()
    })
    tdBtn.appendChild(btnEliminar)

    tr.appendChild(num)
    tr.appendChild(tdTitulo)
    tr.appendChild(tdAlbum)
    tr.appendChild(tdfecha)
    tr.appendChild(tdDuracion)
    tr.appendChild(tdBtn)

    rootTable.appendChild(tr)

    
})


function actualizarCorrelativos() {

    const allRows = Array.from(rootTable.getElementsByTagName('tr'))
    console.log(allRows)
    i = 1
    allRows.forEach(tr => {
        tr.childNodes[0].innerText = i
        i++
    })



}