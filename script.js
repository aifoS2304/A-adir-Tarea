let pantallas = ["login","menu", "add", "lista"];
// Función que muestra una pantalla y oculta las demás
let mostrar = function (id) {
  //Abstracción
  // Buscar y mostrar el elemento deseado
  if (id=="lista")
  document.getElementById("tablaTareas").innerHTML = crearTabla(tareas);
  let aMostrar = document.querySelector("#" + id);
  aMostrar.style.display = "block";
  // Ocultar los demás elementos
  for (pantalla of pantallas) {
    if (pantalla !== id)
      document.querySelector("#" + pantalla).style.display = "none";
  }
  //   return
};

mostrar("login");

let botonesAdd = document.getElementsByClassName("irAAdd");
for (boton of botonesAdd) {
  // onclick necesita la referencia a una función, no
  // el resultado de evaluar una función
  // ARROW FUNCTIONS ()=>{aksj}, funciones anónimas
  boton.onclick = () => mostrar("add");
  // boton.onmouseover = () => mostrar("lista");
}
let botonesLista = document.getElementsByClassName("irLista")
for(boton of botonesLista){
    boton.onclick = ()=> mostrar("lista")
}
let botonesMenu = document.getElementsByClassName("irMenu")
for(boton of botonesMenu){
    boton.onclick = ()=> mostrar("menu");
}
let botonesLogin = document.getElementsByClassName("irLogin")
for(boton of botonesLogin){
    boton.onclick = ()=> mostrar("login");
}
// let botonesCrear = document.getElementsByClassName("Crear")
// for(boton of botonesCrear){
//    boton.onclick = ()=> mostrar("lista");
// }
let tareas = [
  {
    materia: "Física", 
    detalle: "Hacer el laboratorio de movimiento parabólico", 
    fecha:new Date (2020, 4, 25),
    nombreUsuario: "Maria"
  },
  {
    materia: "Informática", 
    detalle: "Hacer el laboratorio de javascript", 
    fecha:new Date (2020, 5, 1),
    nombreUsuario: "Maria"
  },
  {
    materia: "Matemáticas", 
    detalle: "Hacer el laboratorio de pi", 
    fecha:new Date (2020, 4, 29),
    nombreUsuario: "Luis"
  },
  {
    materia: "Ciencias", 
    detalle: "Hacer el laboratorio de movimiento biológico", 
    fecha:new Date (2020, 5, 14 ),
    nombreUsuario: "Maria"
  },
  {
    materia: "Arte", 
    detalle: "Presentación de los afrescos de Giotto", 
    fecha:new Date (2020, 4, 26 ),
    nombreUsuario: "Juan"
  },
  {
    materia: "Arte", 
    detalle: "Presentación de los afrescos de Giotto", 
    fecha:new Date (2020, 4, 26 ),
    nombreUsuario: "Luis"
  },
  {
    materia: "Español", 
    detalle: "Realizar el taller de Don Quijote", 
    fecha:new Date (2020, 5, 19 ),
    nombreUsuario: "Juan"
  },
  {
    materia: "Filosofía", 
    detalle: "Hacer resúmen de la Ética de Aristóteles", 
    fecha:new Date (2020, 4, 17 ),
    nombreUsuario: "Luis"
  }
];
let añadirTareas = function(){
  let materiaAdd = document.getElementById("addMateria").value;
  let detallesAdd = document.getElementById("addDetalles").value;
  let fechaAdd = document.getElementById("addFecha").value;
  // let diaAdd = document.getElementById("Día").value;
  // let mesAdd = document.getElementById("Mes").value;
  // let añoAdd = document.getElementById("Año").value;
  
    tareas.push(
      { materia: materiaAdd, detalle: detallesAdd, fecha: new Date (fechaAdd), nombreUsuario: USUARIO}
      )
  
  mostrar("lista")
  document.getElementById("formaAddTarea").reset()
  return false;
}
let formaAddTarea = document.getElementById("formaAddTarea");
formaAddTarea.onsubmit = añadirTareas;

function myFunction() {
  document.getElementById("formaAddTarea").reset();
}
let crearTabla = function(lista){
  let stringTabla = "<tr><th>Materia</th><th>Detalle</th><th>Fecha </th></tr>";
  for(let  tarea  of lista){
    if(tarea.nombreUsuario == USUARIO){
      let fila = "<tr><td>"
      fila += tarea.materia;
      fila += "</td>"
       
      fila += "<td>"
      fila += tarea.detalle;
      fila += "</td>"
  
      fila += "<td>"
      fila += tarea.fecha;
      fila += "</td>"
  
      fila += "</tr>";
      stringTabla += fila;
      //console.log(stringTabla);
      
    }
  }
  return stringTabla;
};


let usuarios = [ 
    {nombre:"Luis", clave:"clave1234"},
    {nombre:"Juan", clave:"abcd.1234"},
    {nombre:"Maria", clave:"miClave"},

];
let USUARIO; 
let iniciarSesion =function(){
    console.log("Intento de inicio de sesión");
    let nombreIntento = document.getElementById("nombre").value;
    let claveIntento = document.getElementById("password").value; 
    console.log(nombreIntento);
    console.log(claveIntento); 
    for(usuario of usuarios){
      if(usuario.nombre == nombreIntento && usuario.clave == claveIntento){
        //Inicio de sesión exitoso 
        USUARIO = usuario.nombre;
        mostrar("menu");
        document.getElementById("formaInicioSesion").reset();
        return false;
      }
    }
    //Si se llega a este punto, quiere decir que el inicio de sesión no fue exitoso 
    alert("Nombre de usuario o contraseña incorrecto")
    return false ;
};
let formaInicioSesion = document.getElementById("formaInicioSesion");
formaInicioSesion.onsubmit = iniciarSesion;
function closeSesion(){
  document.getElementById("formaInicioSesion").reset();
}
// let cerrarSesión = function(){
//   document.getElementById("cerrarSesión").reset();
//   mostrar("lista")
//   return false;
// }
// let botCerrarSesión = document.getElementById("cerrarSesión");
// botCerrarSesión.onsubmit = cerrarSesión
// let botonesClose = document.getElementById("irLogin")
// for(boton of botonesClose){
//   document.getElementById("formaInicioSesion").reset();
//   boton.onclick = ()=> mostrar("login");
// }