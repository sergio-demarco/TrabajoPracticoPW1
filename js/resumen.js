function calcularPrecio(numeroid){
    var cantidad = document.getElementById("cantidad"+numeroid).value;
    var precio = parseFloat(document.getElementById("precio"+numeroid).innerText.slice(2));
    var resultado = cantidad*precio;
    document.getElementById("subtotal"+numeroid).innerText="$ "+resultado+".00";
    var subtotal1= parseFloat(document.getElementById("subtotal1").innerText.slice(2));
    var subtotal2= parseFloat(document.getElementById("subtotal2").innerText.slice(2));
    var subtotal3= parseFloat(document.getElementById("subtotal3").innerText.slice(2));
    var total=subtotal1+subtotal2+subtotal3;
    document.getElementById("total").innerText="$ "+total+".00";
}