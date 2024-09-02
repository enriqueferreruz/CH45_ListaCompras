const buttonAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidiaciones = document.getElementById("alertValidaciones") 
const alertaValidacionesTexto = document.getElementById("alertValidacionesTexto")

function validarCantidad () {
    if(txtNumber.value.length==0){
    return false;
}
if (isNaN(txtNumber.value)) {
    return false
}
     if (Number(txtNumber.value)<=0) {
        return false
        
     }

    return true
    
}
buttonAgregar.addEventListener("click", function (event) {
      event.preventDefault();
      txtNombre.style.border="";
      txtNumber.style.border="";
      alertaValidacionesTexto.innerHTML="";
    alertValidiaciones.style.display="none";
// validad el nombre del producto
    if (txtNombre.value.length<3) {
        txtNombre.style.border="solid red medium";
    alertaValidacionesTexto.innerHTML= "el <strong>Nombre</strong> no es correcto.<br/>";
        alertValidiaciones.style.display="block";

    }
    
}) //validar cantidad


  //ojo con el uso de !: .........................................................................................................................
   if (! validarCantidad()) {
    txtNumber.style.border="solid red medium";
    alertaValidacionesTexto.innerHTML+="La <strong>cantidad</strong> no es correcta.";
    alertValidiaciones.style.display="block";
 
   }

// evento blur es cuando el campo pierde el foco, se sale del campo
txtNombre.addEventListener("blur", function (event) {
    txtNombre.value = txtNombre.value.trim();
    
})