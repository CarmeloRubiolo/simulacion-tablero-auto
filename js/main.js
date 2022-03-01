let miInterval = "";
let miInterval2 = "";
let arr = [];
let sesionIniciada = false;


const nombre = document.getElementById("name");
const apellido = document.getElementById("lastName");
let email = document.getElementById("email");
let contraseña = document.getElementById("password");
const aviso = document.getElementById("contraseñaIncorrecta");
const aviso2 = document.getElementById("emailIncorrecto");
const correoInicio = document.getElementById("correoInicio");
const contraInicio = document.getElementById("contraInicio");
const aviso3 = document.getElementById("validarNombre");
const aviso4 = document.getElementById("validarApellido");

function validarContraseña() {
  aviso.innerHTML = "";
  let entrada = false;
  let expresioRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  if(!expresioRegular.test(email.value)){
  }
  if(contraseña.value.length < 6 || contraseña.value.length > 15){
  }else if (entrada){
    aviso.innerHTML;
  }else{
    registrarse();
  }
  
}
class usuario {
    constructor(email, contraseña, nombre, apellido){
      this.email = email;
      this.contraseña = contraseña;
      this.nombre = nombre;
      this.apellido = apellido;
    }
}

function registrarse(){
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("password").value;
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("lastName").value;
  let newUser = new usuario(email,contraseña,nombre,apellido);
  arr.push(newUser);
  let cambioJSON = JSON.stringify(arr);
  localStorage.setItem("user", cambioJSON);
  $('#exampleModal1').modal('hide');
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal3'), {
  })
    myModal.show();
}
function obtenerUsuarios(){
  var usuariosRegistrados = JSON.parse(localStorage.getItem("user"));
  return usuariosRegistrados;
}
function validarCuenta(emailV, contrasenaV){
  var usuariosRegistrados = obtenerUsuarios();
  var acceso = false;

  
  for (let i = 0; i < usuariosRegistrados.length; i++) {
    if(emailV == usuariosRegistrados[i].email && contrasenaV == usuariosRegistrados[i].contraseña){
      acceso = true;
      let lblNameLastname = document.getElementById("name-lastName");
      lblNameLastname.removeAttribute("hidden");
      lblNameLastname.innerHTML = usuariosRegistrados[i].nombre + " " + usuariosRegistrados[i].apellido;
      let btnRegistro = document.getElementById("btn-registro");
      let btnInicio = document.getElementById("btn-inicio");
      btnRegistro.setAttribute("hidden", "hidden");
      btnInicio.setAttribute("hidden", "hidden");
      let btnCerrar = document.getElementById("btn-cerrar");
      btnCerrar.removeAttribute("hidden");


    }else{
      $("#incorrecto").html('<p class="btn btn-danger mt-2 p-1" style="font-size:8px; cursor:default;">*El Email o contraseña son incorrecta</p>');
    }
  }
  return acceso;
}
function cerrarSesion(){
  let lblNameLastname = document.getElementById("name-lastName");
  lblNameLastname.setAttribute("hidden", "hidden");
  let btnCerrar = document.getElementById("btn-cerrar");
      btnCerrar.setAttribute("hidden", "hidden");
  let btnRegistro = document.getElementById("btn-registro");
  let btnInicio = document.getElementById("btn-inicio");
      btnRegistro.removeAttribute("hidden");
      btnInicio.removeAttribute("hidden");
      $("#tablero").css({
        "display": "none"
      });
      $("#btnDeInicio").css({
        "display": "block"
      });
  sesionIniciada = false;
}

let iniciar = document.getElementById("iniciar");
iniciar.addEventListener("click", iniciarSeccion);
function iniciarSeccion(){
  var emailV = "";
  var contrasenaV = "";
  emailV = document.querySelector("#correoInicio").value;
  contrasenaV = document.querySelector("#contraInicio").value;
  sesionIniciada = validarCuenta(emailV, contrasenaV);
  if(sesionIniciada){
    $('#exampleModal2').modal('hide');
    
  }
  
    
}
let acelerar = document.getElementById("acelerar");
    acelerar.addEventListener("mousedown", acelerarVelocimetro);
    let acelerar2 = document.getElementById("acelerar");
    acelerar2.addEventListener("mouseup", acelerarVelocimetro2);

function mostrarTablero(){
    if(sesionIniciada){
      $("#tablero").css({
        "display": "block"
      });
      $("#btnDeInicio").css({
        "display": "none"
      });
      

    }else{
      var myModal = new bootstrap.Modal(document.getElementById('exampleModal2'), {
        keyboard: false
      })
        myModal.show();
    }
}


function acelerarVelocimetro() {
  $("#cinturonDeSeguridad").fadeOut();
  $("#velocidadMaxima").fadeOut();
  $("#aguja").css({
    "transform": `rotate( 225deg)`,
    "transition": "15s"
  });
  miInterval = setInterval(function () {
    $("#cinturonDeSeguridad").fadeIn();
  }, 2000);
  miInterval2 = setInterval(function () {
    $("#velocidadMaxima").fadeIn();
  }, 3300);
}

/* let acelerar = document.getElementById("acelerar");
acelerar.addEventListener("mousedown", acelerarVelocimetro); */

function acelerarVelocimetro2() {
  $("#aguja").css({
    "transform": "rotate(-47deg)",
    "transition": "10s"
  });
  $("#cinturonDeSeguridad").fadeOut();
  clearInterval(miInterval);

  $("#velocidadMaxima").fadeOut();
  clearInterval(miInterval2);
}




/* let acelerar2 = document.getElementById("acelerar");
acelerar2.addEventListener("mouseup", acelerarVelocimetro2); */


function frenarVelocimetro() {
  $("#aguja").css({
    "transform": "rotate(-50deg)",
    "transition": "3s"
  });
}
let freno = document.getElementById("freno");
freno.addEventListener("mousedown", frenarVelocimetro);

let miInterval3;
let encendido = false;

function encendidoApagado() {
  if (!encendido) {
    initAnimation();
    encendido = true;
  } else {
    encendido = false;
    endAnimation();
    
  }

}

function initAnimation(){
  document.getElementById('luzdeGiro1').className ='animacion';
  document.getElementById('luzdeGiro2').className ='animacion';
}

function endAnimation(){
   document.getElementById('luzdeGiro1').className ='detener ocultar';
   document.getElementById('luzdeGiro2').className ='detener ocultar';

}



let prender = document.getElementById("botonBaliza");
prender.addEventListener("click", encendidoApagado);

function encenderAuto(){
  $("#cinturonDeSeguridad").fadeIn();
  $("#velocidadMaxima").fadeIn();
  $("#luzBaja").fadeIn();
  $("#aceite").fadeIn();
  $("#frenoDeMano").fadeIn();
  $("#cinturonDeSeguridad").fadeOut(2000);
  $("#velocidadMaxima").fadeOut(2000);
  $("#luzBaja").fadeOut(2000);
  $("#aceite").fadeOut(2000);
  $("#frenoDeMano").fadeOut(2000);
}
let encender = document.getElementById("botonEncendido");
encender.addEventListener("click", encenderAuto);


let habilitarRegistro2 = document.getElementById("lastName");
habilitarRegistro2.addEventListener("keydown", habilitarBtnRegistro2);
let habilitarRegistro = document.getElementById("name");
habilitarRegistro.addEventListener("keydown", habilitarBtnRegistro1);
let habilitarBtn2 = document.getElementById("email");
habilitarBtn2.addEventListener("keydown", habilitarBoton2);
let habilitarBtn = document.getElementById("password");
habilitarBtn.addEventListener("keydown", habilitarBoton);
function habilitarBoton2(){
  aviso2.innerHTML = "";
  let expresioRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(expresioRegular.test(email.value)){
    suscribirse.disabled = false;
    aviso2.innerHTML;
  }else if(!expresioRegular.test(email.value)){
    $("#emailIncorrecto").html('<p class="btn btn-danger mt-2 p-1" style="font-size:8px; cursor:default;" >*El email no es valido</p>');
    return suscribirse.disabled = true;
  }
}
function habilitarBoton() {
  aviso.innerHTML = "";
  
  if (contraseña.value.length > 6 && contraseña.value.length < 15){
    aviso.innerHTML;
    suscribirse.disabled = false;
    
    
  }else{
    $("#contraseñaIncorrecta").html('<p class="btn btn-danger mt-2 p-1" style="font-size:8px; cursor:default;">*Contraseña (entre 6 a 15 dígitos)</p>');
    return suscribirse.disabled = true;
  }
}


function habilitarBtnRegistro1(){
  aviso3.innerHTML = "";
  if(nombre.value.length > 1){
    aviso3.innerHTML;
    suscribirse.disabled = false;
  }else{
    $("#validarNombre").html('<p class="btn btn-danger mt-2 p-1" style="font-size:8px; cursor:default;">*Ingrese nombre</p>');
    return suscribirse.disabled = true;
  }
}
function habilitarBtnRegistro2(){
  aviso4.innerHTML = "";
  if(apellido.value.length > 1){
    aviso4.innerHTML;
    suscribirse.disabled = false;
  }else{
    $("#validarApellido").html('<p class="btn btn-danger mt-2 p-1" style="font-size:8px; cursor:default;">*Ingrese apellido</p>');
    return suscribirse.disabled = true;
  }
}
