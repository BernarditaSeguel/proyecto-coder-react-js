let { a: val } = { a: 2};
let { propName: nombre } = { propName: 'valor' };

console.log(nombre);

let { nombre:nombrePersona, edad: edadPersona, } = {nombre: "josefina", edad:"3"};
console.log(nombrePersona);
console.log(edadPersona);