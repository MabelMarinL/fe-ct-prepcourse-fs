/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var primeroElemento = array[0];
   return primeroElemento;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   // return array[(array.length -1)];
   var ultimoElemento = array.pop();
   return ultimoElemento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   // var modificar = array.map((num)=> num + 1);
   // return modificar;
   var nuevoArreglo = [];
   for(var i=0; i<array.length ; i++){
      var elementos = array[i]+1;
      nuevoArreglo.push(elementos);
   }
   return nuevoArreglo;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
//    var unir;
//    for (var i=0; i<palabras.length; i++){
//       if(i===0){
//        unir = palabras[i];   
//       }else{
//          unir = unir + " " + palabras[i];
//       }
//    }
//    return unir
// }
      return palabras.join(" ");
}
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var nuevo = array.includes(elemento);
   return nuevo;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // let nuevo = arrayOfNums.reduce((a,b) => a+b,0);
   // return nuevo;
   var suma = 0;
   for(let i=0; i<arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // let sumaTotal = resultadosTest.reduce((a,b) => a+b,0)
   // var promedio = sumaTotal/resultadosTest.length;
   // return promedio;
   var sumaTotal = 0;
   for( let i=0; i<resultadosTest.length; i++){
   sumaTotal= sumaTotal + resultadosTest[i];
   var promedio = sumaTotal / resultadosTest.length;
   }
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numMayor = 0;
   for(i=0 ; i<arrayOfNums.length; i++){
      if(arrayOfNums[i] > numMayor){
         numMayor=arrayOfNums[i];
      }
   }
   return numMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var acumulador = 1;
   if(arguments.length ===0){
      return 0;
   }else if(arguments.length ===1){
      return arguments[0];
   }else{
      for(i=0; i<arguments.length; i++){
      acumulador = acumulador*arguments[i];
      } 
   return acumulador;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var suma=0;
   for (let i=0; i<array.length; i++){
      if(array[i]>18){
         suma++;
      }  
   }
   return suma;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia ===7 || numeroDeDia ===1){
      return "Es fin de semana";
   }else{
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   var str = String(num);
   if(str[0]=== "9"){
      return true;
   }else{
      return false;
   }  
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var igual = array[0];
   for(var i=1; i<array.length; i++){
      if(array[i] !== igual){
         return false;
      }
   }
   return true;
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];
   for(var i=0; i<array.length; i++){
      if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
         meses.push(array[i]); 
      }
   }      
   if (meses.length < 3){
      return "No se encontraron los meses pedidos"
   }else{
      return meses;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla=[];
   for(var i=0; i<11; i++){
      tabla.push(i*6);
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevo=[];
   for(var i=0; i<array.length; i++){
      if(array[i] > 100){
         nuevo.push(array[i])
      }
   }
   return nuevo;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var nuevo=[];
   for(var i=0; i<10; i++){
      num= num + 2;
      if(num === i){
         break;
      }else{
         nuevo.push(num);
      }
   }
   if(nuevo.length < 10){
      return "Se interrumpió la ejecución";
   }else{
      return nuevo;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var a =[];
   for( var i=0; i<10; i++){
      if(i === 5){
         continue
      }else{
         num = num+2
         a.push(num);
      }
   }
   return a;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
