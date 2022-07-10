let arregloUno = [1, 2, 3, 4, 5];
let arregloDos = [6, 7, 8, 9, 10];

// [].push.apply(arregloUno, arregloDos);
arregloUno = [...arregloUno, ...arregloDos];
console.log(arregloUno);