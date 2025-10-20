function Ej8() {
  /**
    * Ejercicio 8: Crea una función que reciba un array de valores enteros (positivos y negativos), y
    devuelva otro array con la suma parcial de cada elemento del array que se pasa como parámetro.
    Define el array y sus valores en código.

    Nota: La suma parcial de un elemento del array será la suma de ese elemento y todos los
    anteriores a él.
    Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,21
    */

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function suma_parcial(array) {
    let suma = 0;
    let array_resultado = [];
    for (i = 0; i < array.length; i++) {
      suma += array[i];
      array_resultado.push(suma);
    }

    alert(array_resultado);
  }

  suma_parcial(array);
}

function Ej9() {
  /**
     * Ejercicio 9: Crea una función llamada countBy la cual recibirá dos números enteros positivos:
    X e Y. Esta función debe devolver lo siguiente:
    - Si alguno de los números es negativo devolverá un array vacío.
    - Si no, devolverá un array con los Y primeros múltiplos de X empezando por el
    1 (incluido)
    Ej: Para la entrada X=-2, Y=4, el array resultante será [] (vacío)
    Ej: Para la entrada X=2, Y=4, el array resultante será [2,4,6,8]
    Ej: Para la entrada X=3, Y=5, el array resultante será [3,6,9,12,15]
    */

    // Esta vez pido al usuario
    let x = prompt("Introduce valor de x: ")
    let y = prompt("Introduce valor de y: ")

    function countBy(x,y){
        let resultado = []
        if(x<0 || y<0){
            return resultado
        }else{
            for(i=1; i<= y; i++){
                resultado.push(x * i)
            }
        }

        return resultado
    }
     
    let resultado = countBy(x,y)
    alert(resultado)
}

function Ej10(){
    Array_colores = ["Azul", "Rojo", "Naranja", "Rosa", "Amarillo"]

    function listar(array){
        let string = ""
        for(i=0; i<Array_colores.length; i++){
            if(i==Array_colores.length-1){
                string += Array_colores[i]
            }else{
                string = string + Array_colores[i] + "-"
            }
        }
        return string
    }
    alert(listar(Array_colores))
}

function Ej11(){
    /**
    * Ejercicio 11: Pide al usuario que escriba una frase
    Ejemplo: frase = "JavaScript es un lenguaje versátil y poderoso"
    - Conviértela en un array de cadenas
    - Luego, invierte el orden de las palabras y agrega una nueva palabra al principio del
    array.
    - Finalmente, vuelve a convertir el array en una cadena, separando las palabras con
    comas.
    - Muestra la cadena resultante.
    */

    let frase = prompt("Introduce una frase: ")
    let array_frase = frase.split(" ")
    let invierte = array_frase.reverse()

    let nueva_palabra = "Musica"
    let nuevo_array = invierte.unshift(nueva_palabra)
    alert(invierte)
}

function Ej12(){
    /**
    * Ejercicio 12: Escriba una función que reciba dos arrays y devuelva un nuevo array con
    los elementos que solo aparecen una vez en total (ya sea en el primer o en el segundo
    array). El orden debe ser: primero los que están en el primer array y luego los que están
    en el segundo.
    Ejemplos:
    [1, 2, 3, 3] y [3, 2, 1, 4, 5]) ==> [4, 5]
    */

}