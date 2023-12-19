/* https://www.typescriptlang.org/docs/handbook/decorators.html */
/* en el contexto del framework, un decorador le dice por ejemplo en Angular cómo tiene que interpretar ciertas clases, métodos, propiedades, etc. de manera que a su vez le agrega ciertos comportamientos y funcionalidades que permiten diferenciarlos de los demás objetos. De esta manera, por ejemplo, Angular sabe que tiene un componente cuando a una clase le añades el decorador @component. */
/* ¿Alguna diferencia entre decoradores y "extends"? Los decoradores son funciones que son ejecutadas al momento de definir tus clases, mientras que extends es para heredar de una clase padre, con ella estas definiendo una nueva clase hija con determinadas propiedades y metodos. */

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T // para que sea un decorador de una clase debe recibir el constructor que en este caso será un genérico T
) {
  /* regresar una nueva clase con nuevas propiedades donde la clase se va a extender del constructor */
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

/* también surge una pregunta de que si sería más facil hacer el extend de la class SuperClass o realizar una composición pero lo que pasa es que al usar los decoradores, en Angular nos permite mantener la misma sintaxis de clase y el decorador es quien añade esa funcionalidad extra o cambia el comportamiento de nuestra clase para que sea algo en particular */
@classDecorator
export class SuperClass {
  public myProperty: string = "Abc123";

  print() {
    console.log("Hola Mundo");
  }
}
console.log("**SuperClass**\n", SuperClass); // imprimiendo la definición de la clase, no se está imprimiendo una nueva instancia de la clase

const myClass = new SuperClass(); // crear una nueva instancia de la clase
console.log("**myClass**\n", myClass); // imprimiendo la instancia de la clase creada
