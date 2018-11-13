var myIndex = 0;
var producto ={nombre:"",marca:"",precio:0,cantidad:0}
function Carousel() {
    var i;
    var x = document.getElementsByClassName("imgbanner");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(Carousel, 3000);
}


function AgregarAlCarrito(numeroProducto){
    
    producto.nombre=document.getElementById("Producto"+numeroProducto+"_nombre").innerHTML;
    producto.marca=document.getElementById("Producto"+numeroProducto+"_marca").innerHTML;
    producto.precio=(document.getElementById("Producto"+numeroProducto+"_precio").innerHTML).slice(1);
    producto.cantidad=document.getElementById("Producto"+numeroProducto+"_cantidad").value;
    
    var numero_carrito=document.getElementById("numero_carrito").innerHTML;
    document.getElementById("numero_carrito").innerHTML=parseInt(numero_carrito)+parseInt(producto.cantidad);
}
function VerCarrito(){
    location.href="Resumen.html";
}