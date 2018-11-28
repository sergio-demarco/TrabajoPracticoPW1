$(document).ready(function() {

    $("#form").submit(function() {
        return validar();
    });

});

function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; 
    var mensaje =""; 
    var error =0; 

    reset();
    
    if (document.getElementById("nombre").value==""){ 
        mensaje= "<p>El campo nombre es obligatorio</p>";
        error++;
        document.getElementById("errorNombre").innerHTML= mensaje;
        document.getElementById("nombre").className="error";
    }
    
    if(document.getElementById("apellido").value.length < 5){
        mensaje= "<p>El campo apellido debe tener al menos 4 caracteres </p>";
        error++;
        document.getElementById("errorApellido").innerHTML= mensaje;
        document.getElementById("apellido").className="error";
    }
    if (document.getElementById("dni").value==""){ 
        mensaje= "<p>El campo DNI es obligatorio</p>";
        error++;
        document.getElementById("errorDni").innerHTML= mensaje;
        document.getElementById("dni").className="error";
    }
    if (document.getElementById("fechaCumple").value==""){ 
        mensaje= "<p>Fecha de Cumpleaños es obligatorio</p>";
        error++;
                document.getElementById("errorFechaCumple").innerHTML= mensaje;
        document.getElementById("fechaCumple").className="error";
    }

    if(!regexemail.test($(document.getElementById("email").value))){
        mensaje= "<p>Debe ser un Email valido</p>";
        error++;        
        document.getElementById("errorEmail").innerHTML= mensaje;
        document.getElementById("email").className="error";
        
        $("#errorEmail").append(mensaje);
        $("#email").addClass('error');
    }
    if (document.getElementById("consulta").value==""){ 
        mensaje= "<p>El campo Consulta es obligatorio</p>";
        error++;
        document.getElementById("errorConsulta").innerHTML= mensaje;
    }
    if(error==0){
        document.getElementById("mensajeEnviado").innerHTML= "Mensaje Enviado";
    }
    else{
        document.getElementById("mensajeEnviado").innerHTML="";
    }


}
function reset(){ 
    document.getElementById("nombre").className="";
    document.getElementById("apellido").className="";
    document.getElementById("dni").className="";
    document.getElementById("fechaCumple").className="";
    document.getElementById("email").className="";
    document.getElementById("consulta").className="";
}