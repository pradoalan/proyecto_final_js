//carrito de compras para la pagina de una libreria\

$(document).ready(function(){

//Google Books APIs    
const URLGODS = "https://www.googleapis.com/books/v1/volumes?q=+isbn:9788499185415"
const URLANANSI = "https://www.googleapis.com/books/v1/volumes?q=+isbn:9788499185484"
const URLELEFANTE = "https://www.googleapis.com/books/v1/volumes?q=+isbn:9788490662557"
const URLIT = "https://www.googleapis.com/books/v1/volumes?q=+isbn:9788401354038"
const URLSECONDS = "https://www.googleapis.com/books/v1/volumes?q=+isbn:9788490624425"
const URLVICE = "https://www.googleapis.com/books/v1/volumes?q=+isbn:9788483839607"


//Primer boton que deja ver la informacion del producto    
$("#botonUno").on('click', () => $("#cajaInfoUno").slideToggle("slow"));

    //Boton para agregar al carrito
    $("#carrito").on('click', enCarrito)

    function enCarrito(){
        
        //Metodo get con ajax
        $.ajax({
            
            method: "get",
            url:  URLGODS,
            success: function operarRespuesta(respuesta) {        
                
                let cantidadElementos = $("#cantidadCarrito").val()

                for (var i = 0; i < respuesta.items.length; i++) {
                  var item = respuesta.items[i];
                        $("#botonSuma").before(`<p class="uno">${item.volumeInfo.title} x ${cantidadElementos} <br> $${(item.saleInfo.listPrice.amount * cantidadElementos).toFixed(2)}  <br> <button id="eliminarObj1" class="btn btn-dark">Eliminar</button></p>`);
            }

        //Ingreso del precio al carrito
        arrayCarrito.push(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));  

        //Desabilitamos el boton para que no se pueda agregar mas el producto
        $('#carrito').attr("disabled", true);
        
        //Boton para eliminar objetos
        $("#eliminarObj1").on('click', eliminandoObjeto1);

        function eliminandoObjeto1(){

            //Volvemos a habilitar el boton del producto una vez lo eliminamos del carrito
            $('#carrito').attr("disabled", false);
    
            //Eliminamos el rpoducto del html
            $("#total .uno").hide("slow", () => {
                $("#total .uno").remove()
            })

            //Eliminamos el precio del carrito
            const index = arrayCarrito.indexOf(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));
                if(index > -1){
                    arrayCarrito.splice(index,1);
                }

            }
        }
    })
}  

//Segundo boton que deja ver la informacion del producto
$("#botonDos").on('click', () => $("#cajaInfoDos").slideToggle("slow"));

    //Boton para agregar al carrito
    $("#carrito2").on('click', enCarrito2);

    function enCarrito2(){

        //Metodo get con ajax
        $.ajax({
            method: "get",
            url: URLANANSI,
            success: function operarRespuesta(respuesta){

                let cantidadElementos = $("#cantidadCarrito2").val()

                for(var i = 0; i < respuesta.items.length; i++) {
                    var item = respuesta.items[i];
                    $("#botonSuma").before(`<p class="dos">${item.volumeInfo.title} x ${cantidadElementos} <br> $${(item.saleInfo.listPrice.amount * cantidadElementos).toFixed(2)} <br> <button id="eliminarObj2" class="btn btn-dark">Eliminar</button></p>`);
                }   
        
        //Ingreso del precio al carrito
        arrayCarrito.push(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));

        //Desabilitamos el boton para que no se pueda agregar mas el producto
        $('#carrito2').attr("disabled", true);
        
        //Boton para eliminar objetos
        $("#eliminarObj2").on('click', eliminandoObjeto2)

        function eliminandoObjeto2(){

            //Volvemos a habilitar el boton del producto una vez lo eliminamos del carrito
            $('#carrito2').attr("disabled", false);

            //Eliminamos el producto del html
            $("#total .dos").hide("slow", () => {
                $("#total .dos").remove()
            })
                
                //Eliminamos el precio del carrito
                const index = arrayCarrito.indexOf(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));
                if(index > -1){
                    arrayCarrito.splice(index,1);
                    }
                }
            }
        })  
    }

//Tercer boton que deja ver la informacion del producto
$("#botonTres").on('click', () => $("#cajaInfoTres").slideToggle("slow"));


    //Boton para agregar al carrito
    $("#carrito3").on('click', enCarrito3);

    function enCarrito3(){

        //Metodo get con ajax
        $.ajax({
            method: "get",
            url: URLELEFANTE,
            success: function operarRespuesta (respuesta){

                let cantidadElementos = $("#cantidadCarrito3").val()

                for(var i = 0; i < respuesta.items.length; i++){
                    var item = respuesta.items[i];
                    $("#botonSuma").before(`<p class="tres">${item.volumeInfo.title} x ${cantidadElementos} <br> $${(item.saleInfo.listPrice.amount * cantidadElementos).toFixed(2)} <br> <button id="eliminarObj3" class="btn btn-dark">Eliminar</button></p>`);
                }

        //Ingreso del precio al carrito
        arrayCarrito.push(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos))
        
        //Desabilitamos el boton para que no se pueda agregar mas el producto
        $('#carrito3').attr("disabled", true);
        
        //Boton para eliminar objetos
        $("#eliminarObj3").on('click', eliminandoObjeto3);

        function eliminandoObjeto3(){

            //Volvemos a habilitar el boton del producto una vez lo eliminamos del carrito
            $('#carrito3').attr("disabled", false);

            //Eliminamos el producto del html
            $("#total .tres").hide("slow", () => {
                $("#total .tres").remove()
            })

                    //ELiminamos el precio del carrito
                    const index = arrayCarrito.indexOf(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));
                    if(index > -1){
                        arrayCarrito.splice(index,1);
            
                    }

                }
            }
        })
    }

//Cuarto boton que deja ver la informacion del producto
$("#botonCuatro").on('click', () => $("#cajaInfoCuatro").slideToggle("slow"));


    //Boton para agregar al carrito
    $("#carrito4").on('click', enCarrito4);

    function enCarrito4(){

        //Metodo get con ajax
        $.ajax({
            method: "get",
            url: URLIT,
            success: function operarRespuesta (respuesta){

                let cantidadElementos = $("#cantidadCarrito4").val()

                for(var i = 0; i < respuesta.items.length; i++){
                    var item = respuesta.items[i];
                    $("#botonSuma").before(`<p class="cuatro">${item.volumeInfo.title} x ${cantidadElementos} <br> $${(item.saleInfo.listPrice.amount * cantidadElementos).toFixed(2)} <br> <button id="eliminarObj4" class="btn btn-dark">Eliminar</button></p>`);
                }

        //Ingreso del precio al carrito
        arrayCarrito.push(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos))
        
        //Desabilitamos el boton para que no se pueda agregar mas el producto
        $('#carrito4').attr("disabled", true);
        
        //Boton para eliminar objetos
        $("#eliminarObj4").on('click', eliminandoObjeto4);

        function eliminandoObjeto4(){

            //Volvemos a habilitar el boton del producto una vez lo eliminamos del carrito
            $('#carrito4').attr("disabled", false);

            //Eliminamos el producto del html
            $("#total .cuatro").hide("slow", () => {
                $("#total .cuatro").remove()
            })

                    //ELiminamos el precio del carrito
                    const index = arrayCarrito.indexOf(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));
                    if(index > -1){
                        arrayCarrito.splice(index,1);
            
                    }

                }
            }
        })
    }

//Quinto boton que deja ver la informacion del producto
$("#botonCinco").on('click', () => $("#cajaInfoCinco").slideToggle("slow"));


    //Boton para agregar al carrito
    $("#carrito5").on('click', enCarrito5);

    function enCarrito5(){

        //Metodo get con ajax
        $.ajax({
            method: "get",
            url: URLSECONDS,
            success: function operarRespuesta (respuesta){

                let cantidadElementos = $("#cantidadCarrito5").val()

                for(var i = 0; i < respuesta.items.length; i++){
                    var item = respuesta.items[i];
                    $("#botonSuma").before(`<p class="cinco">${item.volumeInfo.title} x ${cantidadElementos} <br> $${(item.saleInfo.listPrice.amount * cantidadElementos).toFixed(2)} <br> <button id="eliminarObj5" class="btn btn-dark">Eliminar</button></p>`);
                }

        //Ingreso del precio al carrito
        arrayCarrito.push(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos))
        
        //Desabilitamos el boton para que no se pueda agregar mas el producto
        $('#carrito5').attr("disabled", true);
        
        //Boton para eliminar objetos
        $("#eliminarObj5").on('click', eliminandoObjeto5);

        function eliminandoObjeto5(){

            //Volvemos a habilitar el boton del producto una vez lo eliminamos del carrito
            $('#carrito5').attr("disabled", false);

            //Eliminamos el producto del html
            $("#total .cinco").hide("slow", () => {
                $("#total .cinco").remove()
            })

                    //ELiminamos el precio del carrito
                    const index = arrayCarrito.indexOf(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));
                    if(index > -1){
                        arrayCarrito.splice(index,1);
            
                    }

                }
            }
        })
    }    

//Sexto boton que deja ver la informacion del producto
$("#botonSeis").on('click', () => $("#cajaInfoSeis").slideToggle("slow"));


    //Boton para agregar al carrito
    $("#carrito6").on('click', enCarrito6);

    function enCarrito6(){

        //Metodo get con ajax
        $.ajax({
            method: "get",
            url: URLVICE,
            success: function operarRespuesta (respuesta){

                let cantidadElementos = $("#cantidadCarrito6").val()

                for(var i = 0; i < respuesta.items.length; i++){
                    var item = respuesta.items[i];
                    $("#botonSuma").before(`<p class="seis">${item.volumeInfo.title} x ${cantidadElementos} <br> $${(item.saleInfo.listPrice.amount * cantidadElementos).toFixed(2)} <br> <button id="eliminarObj6" class="btn btn-dark">Eliminar</button></p>`);
                }

        //Ingreso del precio al carrito
        arrayCarrito.push(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos))
        
        //Desabilitamos el boton para que no se pueda agregar mas el producto
        $('#carrito6').attr("disabled", true);
        
        //Boton para eliminar objetos
        $("#eliminarObj6").on('click', eliminandoObjeto6);

        function eliminandoObjeto6(){

            //Volvemos a habilitar el boton del producto una vez lo eliminamos del carrito
            $('#carrito6').attr("disabled", false);

            //Eliminamos el producto del html
            $("#total .seis").hide("slow", () => {
                $("#total .seis").remove()
            })

                    //ELiminamos el precio del carrito
                    const index = arrayCarrito.indexOf(parseFloat(`${item.saleInfo.listPrice.amount}` * cantidadElementos));
                    if(index > -1){
                        arrayCarrito.splice(index,1);
            
                    }

                }
            }
        })
    }


//Array con los precios agregados al carrito
const arrayCarrito = []

//Boton para sumar todos los productos seleccionados y sacar un precio total
$("#botonSuma").on('click', sumarTodo)

function sumarTodo(){
    let sumaCompra = 0;

    for (let i = 0; i < arrayCarrito.length; i++) {
        
        sumaCompra += arrayCarrito[i]
                
}

    $(".totalFinal").text(`Total: $${sumaCompra.toFixed(2)}`)

    //Dentro de la funcion guardamos en el local storage los valores que haya gastado el usuario al momento de finalizar la compra
    localStorage.setItem("valorCarrito", JSON.stringify(arrayCarrito));

}

})