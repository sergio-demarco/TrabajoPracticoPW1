function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; 
    var mensaje =""; 
    var error =0; 

    reset();
    if ($("#nombre").val()==""){ 
        mensaje= "<p>El campo nombre es obligatorio</p>";
        error++;
        $("#errorNombre").append(mensaje);
        $("#nombre").addClass('error');
    }
    if($("#apellido").val().length < 5){
        mensaje= "<p>El campo apellido debe tener al menos 4 caracteres </p>";
        error++;
        $("#errorApellido").append(mensaje);
        $("#apellido").addClass('error');
    }
    if ($("#dni").val()==""){ 
        mensaje= "<p>El campo DNI es obligatorio</p>";
        error++;
        $("#errorDni").append(mensaje);
        $("#dni").addClass('error');
    }
    if ($("#fechaCumple").val()==""){ 
        mensaje= "<p>Fecha de Cumpleaños es obligatorio</p>";
        error++;
        $("#errorFechaCumple").append(mensaje);
        $("#fechaCumple").addClass('error');
    }

    if(!$("#email").val().match(regexemail)){
        mensaje= "<p>Debe ser un Email valido</p>";
        error++;
        $("#errorEmail").append(mensaje);
        $("#email").addClass('error');
    }
    if ($("#consulta").val()==""){ 
        mensaje= "<p>El campo Consulta es obligatorio</p>";
        error++;
        $("#errorConsulta").append(mensaje);
    }
    if(error==0){
        $("#mensajeEnviado").append("Mensaje Enviado");
    }
    else{
        $("#mensajeEnviado").empty();
    }


}
function reset(){ /*Esta funciona elimina todas las clases de error*/
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#dni").removeClass('error');
    $("#fechaCumple").removeClass('error');
    $("#email").removeClass('error');
    $("#consulta").removeClass('error');
}

$(document).ready(function() {

    $("#form").submit(function() {
        return validar();
    });

});