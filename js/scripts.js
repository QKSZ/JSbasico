//queryselector
const heading = document.querySelector('#heading'); //retorna 0 o 1 elementos
heading.textContent = "nuevo heading";
heading.classList.add('nueva-clase');


//queryselector all
const enlaces = document.querySelectorAll('.navegacion a');
console.log (enlaces);
//para acceder al primer enlace es igual que accediendo a un array
console.log(enlaces[0]);
enlaces[0].textContent = 'nuevo texto';
//enlaces[0].href='http://google.com';  // para agregar enlaces
enlaces[0].classList.add ('otra-clase');
//enlaces[0].classList.remove ('navegacion__enlace');

//getelemt by ID

const heading2 =  document.getElementById ('heading');
console.log(heading2);

//todo lo demas es igual 

//General enlace con codigo de JS
const nuevoEnlace = document.createElement('A')
//como agregar contenido y atributos
//agregar el HREF
nuevoEnlace.href='nuevo-enlace.html';
//TEXTO
nuevoEnlace.textContent = 'un Nuevo enlace';
//Agregar Clase
nuevoEnlace.classList.add ('navegacion__enlace');

//el ultimo paso es agregarlo al documento
const navegacion = document.querySelector ('.navegacion');
navegacion.appendChild(nuevoEnlace)




console.log(nuevoEnlace);


//Eventos

// console.log(1);
// window.addEventListener('load', imprimir)

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function (){ // Load espera todo el HTML , el DOMCONTent solo espera el HTML pero no espera CSS e Imagenes
//     console.log (4);
// });



// console.log(5);

// function imprimir () {
//     console.log (2)
// }

// window.onscroll = function () {
//     console.log('scrolling...')
// }



//seleccionar elementos y asociar Eventos

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click',function(evento){
//     console.log(evento);
//     evento.preventDefault(); //util para validar un formulario
//     console.log('enviando formulario')
// });

//eventos de los inputs y textareas
const datos = {
    nombre:'',
    email:'',
    mensaje:''

}



const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    


    //validar formulario
    const { nombre, email, mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === ''){
        mostarAlerta('Todos los campos son Obligatorios',true);


        // console.log('Todos los campos son obligatorios');
        return;
    }



    // console.log(nombre);
    // console.log(email)
    // console.log(mensaje)

    //enviar formulario
    mostarAlerta('Enviado correctamente');



})
function leerTexto (e){
//console.log(e.target.value);
datos[e.target.id] = e.target.value;
console.log(datos);
}
// esta tecnica se puede utilizar en todos los formularios


//refactoring

function mostarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error){
        alerta.classList.add('error');
    }
    else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
       },5000)
}







// function mostrarError (mensaje){
//  const error = document.createElement('P');
//  error.textContent = mensaje;
//  error.classList.add('error');
//  formulario.appendChild(error);

//     //desaparezca despues de 5 seg

//     setTimeout(()=>{
//         error.remove();
//     },5000)


// }
// function mostrarAprobado (mensaje){
//     const succes = document.createElement('P');
//     succes.textContent = mensaje;
//     succes.classList.add('correcto');
//     formulario.appendChild(succes);
   
//        //desaparezca despues de 5 seg
   
//        setTimeout(()=>{
//         succes.remove();
//        },5000)
   
   
//    }
