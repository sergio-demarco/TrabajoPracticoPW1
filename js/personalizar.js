$(document).ready(function() {

    $( "#editarNombre" ).keyup(function() {
        $("#nombreProducto").empty();
        $("#nombreProducto").append($("#editarNombre").val()+' - Pastillas');
    });

    $('input[type=radio][name=color]').change(function() {
        var classNombre="cambiarColor"+this.value
        $("#imagenProducto").removeClass().addClass(classNombre);
    });
    $('input[type=radio][name=forma]').change(function() {
        var texto=$('#nombreProducto').html();
        var texto2 = texto.split('-')[0]; 
        $("#nombreProducto").empty();
        $("#nombreProducto").append(texto2+" - "+this.value);
    });
    
});