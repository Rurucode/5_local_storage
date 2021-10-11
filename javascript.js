// Ejercicios
// 1. Formulario de contacto - Local Storage

//     Crear un formulario de contacto con los siguientes campos:
//         Nombre
//         Email
//         Mensaje
//     Guardar en Local Storage los datos de contacto enviados de cada usuario
//     Mostrar los datos de los contactos guardados en el DOM
//     Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave

// 2. Avanzado - Local Storage

//     Crea botón para borrar todos los contactos guardados en Local Storage
//     Crea botón para borrar un contacto en concreto de Local Storage.


let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");



let i = 0
let escribirLocal = () =>{
    i++;
    let usuario = {
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value
    }
    localStorage.setItem(`usuario ${i}`, JSON.stringify(usuario));
}


let elNombre = localStorage.getItem('name');
let elEmail = localStorage.getItem('email');
let elMensaje = localStorage.getItem('mensaje');

let datosGuardados = () => {
    alert(`Tus datos guardados para nombre son: ${elNombre} , email: ${elEmail} y el mensaje: ${elMensaje}.`);
}

let borrarData = () => {
    i = 0;
    return localStorage.clear()
}