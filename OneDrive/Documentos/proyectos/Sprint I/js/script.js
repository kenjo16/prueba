/*function encriptar(){
    document.getElementById("img").style.display="none";   
    document.getElementById("txt-principal").style.display="none";  
    document.getElementById("parrafo-encriptador").style.display="none";
    
}
function encriptar(){
    var mensaje = document.getElementById("txtEncriptar").value;
    var encriptar = document.getElementById("btn-encriptar");
    var desencriptar = document.getElementById("btn-desencriptar");
    var message = document.querySelector("#txtEncriptar").value;
    console.log(message);
}*/


//var mensaje = document.querySelector("#txtEncriptar");
function encriptar(){
    var mensaje = document.getElementById("txtEncriptar").innerHTML;
    var mensajeDesencriptado = mensaje.replace(/a/gi,"ai").replace(/e/gi,"enter");
    console.log(mensaje);
}


//var encriptado = mensaje.replaceChild()

//var llave = {a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"}





