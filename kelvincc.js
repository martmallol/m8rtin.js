// Voy a crear la variable kelvin y asignarle un valor numerico.
const kelvin = 0;
// Ahora creo la variable celcius, que consta en restarle 273 al valor de los kelvin.
const celsius = kelvin - 273;
// Nuevamente creo una variable, llamada fahrenheit, que utiliza una operacion de multiplicacion y suma con la variable celsius. Para dividir bien los terminos, entrecierro la operacion con parentesis.
let fahrenheit = (celsius * (9/5) + 32);
// Utilizo un metodo(linea de codigo ya hecha por alguien mas) de la libreria de js "math" que me permite redondear los decimales de los fahrenheit.
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");
// Ahora hago el ultimo paso. Cargo la temperatura newton y luego la redondeo utilizando el mismo metodo que con los fahrenheit.
let newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(newton);
