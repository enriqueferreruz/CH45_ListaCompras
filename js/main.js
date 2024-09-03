const buttonAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidiaciones = document.getElementById("alertValidaciones");
const alertaValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");
//bandera, al ser true permite agregar los datos a la tabla
let isValid = true; 

let contador =0;
let precio=0;

let costoTotal=0;
let totalEnProductos=0;


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

//.....................................................................................................................................................
function getPrecio () {
    return Math.round((Math.random()*10000))/100
}
//.....................................................................................................................................................
buttonAgregar.addEventListener("click", function (event) {
      event.preventDefault();
      txtNombre.style.border="";
      txtNumber.style.border="";
      alertaValidacionesTexto.innerHTML="";
    alertValidiaciones.style.display="none";
    isValid = true
// validad el nombre del producto
    if (txtNombre.value.length<3) {
        txtNombre.style.border="solid red medium";
    alertaValidacionesTexto.innerHTML= "el <strong>Nombre</strong> no es correcto.<br/>";
        alertValidiaciones.style.display="block";
        isValid = false;

    }
    if (! validarCantidad()) {
        txtNumber.style.border="solid red medium";
        alertaValidacionesTexto.innerHTML+="La <strong>cantidad</strong> no es correcta.";
        alertValidiaciones.style.display="block";
        isValid = false;
       }// validad canditad
    
    if (isValid) {
        contador++;
        precio= getPrecio();{}
        let row = `<tr>
                       <td>${contador}</td>
                       <td>${txtNombre.value}</td>
                       <td>${txtNumber.value}</td>
                       <td>${precio}</td>
                     </tr>`
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
       
       costoTotal = precio * Number(txtNumber.value);
       totalEnProductos += Number(txtNumber.value);
       contadorProductos.innerText = contador; 
       productosTotal.innerText = totalEnProductos;
       precioTotal.innerText="$" + costoTotal.toFixed(2);

       localStorage.setItem("contador", contador);
       localStorage.setItem("totalEnProductos", totalEnProductos);
       localStorage.setItem("costoTotal", costoTotal);


       txtNombre.value="";
       txtNumber.value="";
       txtNombre.focus();
       
    }
    
}) //buttonAgregar



  //ojo con el uso de !: .........................................................................................................................
//    if (! validarCantidad()) {
//     txtNumber.style.border="solid red medium";
//     alertaValidacionesTexto.innerHTML+="La <strong>cantidad</strong> no es correcta.";
//     alertValidiaciones.style.display="block";
 
//    }

// evento blur es cuando el campo pierde el foco, se sale del campo
txtNombre.addEventListener("blur", function (event) {
    txtNombre.value = txtNombre.value.trim();
    
})

window.addEventListener("load", function () {
    if (this.localStorage.getItem("contador") !=null); {
        contador = Number(this.localStorage.getItem("contador"));
        
    }//! null

    if (localStorage.getItem("totalEnProductos")!=null) {
        totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"));
    }//!null

    if (localStorage.getItem("costoTotal") !=null) {
        costoTotal = Number (this.localStorage.getItem("costoTotal"));
    }
    contadorProductos.innerText = contador; 
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText="$" + costoTotal.toFixed(2);


    
}); //windows load