/* si T que es el genérico es un string entonces la función es un string, argument es string y lo que regresa la función es un string */
/* si T que es el genérico es un number entonces la función es un number, argument es number y lo que regresa la función es un number */
export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hola Mundo");
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
