//Carrito de compras para la pagina de una libreria online
$(document).ready(function(){

//Variables
class producto{
    constructor (id, nombre, autor, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const listaLibros = [];
let carrito = [];
let total = 0;
const URLGOOGLEBOOKS = "https://www.googleapis.com/books/v1/volumes?q=+inpublisher:tusquets"

//Funciones

//Uso del metodo get para cargar la informacion de los productos y dibujarlos en el DOM
$.ajax({
    method:"get",
    url:URLGOOGLEBOOKS,
    success: function cargarInfoLibros (respuesta){
        for(var i = 0; i < respuesta.items.length; i++) {
            var item = respuesta.items[i];
            //Filtrando los productos disponibles de la editorial y sumandolos al array "listaLibros"
            if(item.saleInfo.saleability == "FOR_SALE"){
            listaLibros.push (new producto(i, item.volumeInfo.title, item.volumeInfo.authors ,item.saleInfo.listPrice.amount, item.volumeInfo.imageLinks.thumbnail))}
        }

        listaLibros.forEach((info) =>{
            $("#items").append(`<div class="card col-sm-4 cajaItems">
                            <div class="card-body cajaInfo">
                            <img class="img-fluid" src="${info.imagen}">
                            <h3 class="card-title">${info.nombre}</h3>
                            <p class="card-text">${info.autor}</p>
                            <p class="card-text">$${info.precio}</p>
                            <button class="btn btn-danger botonAgregarCarrito" marcador="${info.id}">Agregar al carrito</button>
                            </div>
                            </div>`);
            
            
        })
        $(".botonAgregarCarrito").on('click', enCarrito);
    }
})

//Se agrega al carrito el producto seleccionado, calculando el total, evitando que se repita el producto y guardando en el localStorage
function enCarrito(evento){  
    carrito.push(evento.target.getAttribute('marcador'));
    calcularTotal();
    actualizarCarrito();
    guardarCarritoLocalStorage();
}  

//Se dibujan los productos en el carrito, eliminando los productos duplicados
function actualizarCarrito(){
    $("#carrito").text("")
    
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = listaLibros.filter((itemListaLibros) => {
            return itemListaLibros.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        $("#carrito").append(`<li class="list-group-item text-right mx-2 enCarrito">${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$
                              <button class="btn btn-danger mx-5 borrarItem" style="margin-left: 1rem;" data-item="${item}" title="Eliminar">X</button>
                              </li>`)

        $(".borrarItem").on('click', borrarItemCarrito);
    });
}

//Funcion para borrar items del carrito 
function borrarItemCarrito(evento){
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    actualizarCarrito();
    calcularTotal();
    guardarCarritoLocalStorage();
}

//Se calcula el total del carrito actualizando automaticamente a medida que se sacan o agregan productos
function calcularTotal(){
    total = 0;
    carrito.forEach((item) => {
        const miItem = listaLibros.filter((itemListaLibros) => {
            return itemListaLibros.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    $("#total").text(`${(total).toFixed(2)}`)
}

$("#botonFinalizar").on('click', finalizarCarrito)

//Finaliza la compra mostrando un mensaje mediante un alert, vaciando el carrito y actualizando el total
function finalizarCarrito(){
    alert(`Gracias por su compra, su total es de: $${total}`)
    carrito = [];
    actualizarCarrito();
    calcularTotal();
}
  
//Guarda los items en el localStorage bajo el key "carrito"
function guardarCarritoLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

$(window).on('unload', function() {
    localStorage.clear();
  });

})