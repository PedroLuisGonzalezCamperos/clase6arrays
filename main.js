// console.log("No me molesten que hoy juega la Sele");

// Arrays

// Declaramos un array utilizando los corchetes

//                           0        1        2        3        4          5
// const arrayDeGanadores = ["Guido", "Diego", "Theo", "Miguel", "Alejo", "Marcelo", "Ignacio", "Lucas"];

// console.log(arrayDeGanadores);

// Para acceder a la longitud del array, utilizamos su propiedad length
// La ayuda memoria para no errarle nunca: LOS GATITOS TIENEN HAMBRE (GTH)

// console.log(arrayDeGanadores.length);

/*

if(carrito.length > 0){
  //MUESTRO PRODUCTOS
} else {
  //DIGO CARRITO VACÍO 
}

*/

// Para acceder a un elemento de un array, escribimos el nombre de la variable que contiene ese array y entre corchetes, le ponemos el índice.

// console.log("Accedo al elemento 2", arrayDeGanadores[2]);
// console.log("Accedo al elemento 5", arrayDeGanadores[5]);

// arrayDeGanadores[2] = "Ignacio";


// const nuevoGanador = prompt("Ingrese nuevo ganador");

// // console.log(arrayDeGanadores);
// arrayDeGanadores[arrayDeGanadores.length] = nuevoGanador;

// alert("Estos son los ganadores del concurso en el chat:");

// for (let i = 0; i < arrayDeGanadores.length; i++) {
//     alert("Ganador número " + (i + 1) + " " + arrayDeGanadores[i]);
// };

// Empieza desde 0. Si el array tiene 8 elementos, va a iterar 8 veces haciendo array.length. Por qué? Porque va desde 0 hasta 8. Y la última posición de mi array de 8 elementos es la posición 7


// Utilizamos length para que sea dinámico.

// ----------------------------------------

// Para agregar un elemento al final del array, lo correcto es usar el método PUSH. Cómo funciona? 

/*

nombreDelArray.push(elementoAAgregar);

Lo agrega al final del array

*/

// arrayDeGanadores.push("Nuevo alumno");

// arrayDeGanadores.unshift("Argentina");

// Para eliminar usamos pop (hace lo inverso a push) y shift (hace lo inverso a unshift)

// PUSH-POP   UNSHIFT-SHIFT

// arrayDeGanadores.pop();
// arrayDeGanadores.pop();
// arrayDeGanadores.shift();

// Podemos usar splice también para eliminar. Escribimos array.splice(posicion, cantidad) donde ponemos los números que nos indican la posición donde vamos a empezar a eliminar y la cantidad de elementos que queremos eliminar 

// arrayDeGanadores.splice(3, 1)

// console.log(arrayDeGanadores);



// JOIN: sirve para unir los elementos de un array

// console.log(arrayDeGanadores);

// let mensajeFinal = arrayDeGanadores.join("\n*")
// console.log("Los ganadores son \n*" + mensajeFinal);


// SLICE: nos permite tomar una porción copia del array original. Ejemplo:



// const copia = arrayDeGanadores.slice(2,5);

// console.log(copia)


// INDEX OF: nos permite conocer el índice de un elemento que se encuentra dentro del array. Se puede utilizar, por ejemplo, para eliminar un elemento específico que no conozco su índice.

// console.log(arrayDeGanadores);

// const diego = arrayDeGanadores.indexOf("Diego");

// console.log("Diego está en la posición ", diego)

// arrayDeGanadores.splice(diego,1)


// INCLUDES: funciona igual que indexOf pero en vez de devolverme un número correspondiente al índice, me devuelve true o false diciéndome si ese elemento está incluído en el array o no.


// REVERSE: invierte el orden de los elementos dentro del array. OJO porque es un método destructivo. Esto quiere decir que modifica al array original

// console.log(arrayDeGanadores.reverse())

// arrayDeGanadores.reverse();

// const productos = [
//     {
//         id: 1,
//         nombre: "Remera",
//         precio: 10,
//         enOferta: true,
//     },
//     {
//         id: 2,
//         nombre: "Pantalón",
//         precio: 12,
//         enOferta: false,
//     },
//     {
//         id: 3,
//         nombre: "Zapatillas",
//         precio: 11,
//         enOferta: true,
//     },
//     {
//         id: 4,
//         nombre: "Campera",
//         precio: 25,
//         enOferta: true,
//     },
// ];

// console.log(productos);

// for(let i = 0; i < productos.length; i++){
//     console.log(productos[i]);
//     // alert(productos[i].id + "- " + productos[i].nombre + ": $" + productos[i].precio);
// };

// let arrayNumeros = [1,true,{id: 3},4,"5"]

// for (const numero of arrayNumeros) {
//     console.log(numero);
//     // alert(producto.id + "- " + producto.nombre + ": $" + producto.precio);
// }

// console.log(numero)

// TAREA FINAL BOSS a cargo de los alumnos:

/*

1. Crear un array de productos vacío.
2. Declarar una clase constructora llamada Producto para crear nuestro producto
3. Vamos a solicitar por prompt al usuario que ingrese un número del 1 al 3.
4. De acuerdo a ese número, vamos a crear esa cantidad de productos. (pista: usamos for para la cantidad de repeticiones)
5. Por prompt, solicitamos los datos del producto (nombre y precio).
6. Los agregamos al array con algún método. (pista: usamos new Producto para crear el objeto y después un método de agregado de elementos a un array)
7. Mostramos el array por consola.
8. Opcional: recorrer el array y mostrar por alert la información de cada objeto.

*/


let productos = [];

class producto {

     constructor(nombre,precio) {

     this.nombre=nombre;
     this.precio=precio;



     }



}

let z=prompt("Ingresa un número del 1 al 4"); 


for (let i=1; i<=z; i++) {

 
productos[i-1]= new producto(prompt("Ingresa el nombre del producto"),prompt("Ingresa el precio del producto"));



}

console.log(productos);