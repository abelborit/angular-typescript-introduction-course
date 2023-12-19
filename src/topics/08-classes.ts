/* forma 1 donde NO es tan usual hacerlo así porque hay más líneas de código ya que hay que colocar el nivel de acceso afuera del constructor luego pasarle parámetros al constructor y luego hacer la asignación de esas propiedades con el this. Se puede inicializar o bien definir tus propiedades fuera del constructor, eso es útil cuando no las quieres inicializar cuando se crea una nueva instancia, o cuando siempre tendrán un valor por defecto. */
export class Person1 {
  public name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}
const tony1 = new Person1("Tony", "New York");
console.log(tony1);
console.log(tony1.address);

/* forma 2 donde SI es más usual hacerlo así porque hay menos líneas de código ya que colocamos el nivel de acceso directamente en el constructor y hacer eso le asigna sus valores automáticamente. La idea de inicializar las propiedades dentro del constructor ayuda mucho a reducir el código y que sea más fácil de leer. Definir las propiedades dentro del constructor es una forma corta para hacer todo el proceso de asignación a la hora de crear la nueva instancia de nuestra clase en TypeScript */
export class Person {
  /* el constructor es un método especial en nuestras clases. Este es el primero método o función que se llamará cuando creamos la instancia de nuestra clase como en el caso de const tony = new Person(.....) donde se le están pasando argumentos donde el constructor los recibe */
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No Address"
  ) {}
}

/* extender una clase y dar herencia hasta un nivel o dos puede ser algo relativamente normal pero al ya extender de varias clases entonces eso da bastante complejidad a nuestro código y es por eso que debemos priorizar la composición en lugar de la herencia ya que nos facilita tener los objetos más facilmente y evitar llamar a super() */
// export class Hero2 extends Person1 {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     /* al definir un nuevo constructor de una clase que es extendida nos pedirá la función super() que es una función especial que le indica a TypeScript que tiene que llamar al constructor del padre que en este caso sería Person y asignarle los parámetros necesarios */
//     super(realName, "New York"); // name, address
//   }
// }

/* priorizar la composición en lugar de la herencia. Aquí estamos creando una nueva propiedad public person de tipo Person, ya sea directamente en el constructor o desde el exterior del constructor con su asignación pero de esa forma si la class Person cambiara en su constructor y ahora necesitamos más información entonces la class Hero se vería afectada, es decir, la class Hero se vería afectada por un cambio de la class Person y no tendría sentido que ocurriera eso, entonces para evitarlo lo colocamos directo en el constructor de la class Hero */
export class Hero {
  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person // composición de una clase
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person("Tony", "Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", tony);

console.log(tony.address); // para este caso TypeScript reconoce a address como una propiedad privada y solo se puede usar dentro de esa clase respectivamente y es por eso que no es parte de su intellisense pero igual se puede escribir manualmente y con esto igual mostrará su valor en la consola y algunos lo pueden considerar un error o que TypeScript no está haciendo nada para mitigar este detalle pero hay que recordar que al final TypeScript transpila su código a JavaScript y en pocas palabras en JavaScript no lo está manejando como una propiedad privada o pública sino que simplemente tiene su acceso y por eso lo muestra pero igual en TypeScript nos dará un error o un warning
console.log(tony);
console.log(ironman);

/* ************************************************************************************************************************ */
/* Herencia y propiedades privadas: En TypeScript, cuando una clase hereda de otra, hereda tanto las propiedades públicas como las privadas. Sin embargo, la visibilidad de una propiedad privada significa que solo es accesible dentro de la clase en la que se define o se crea. La clase hija puede acceder a la propiedad privada de la clase padre a través de sus métodos públicos, pero no directamente.

En el ejemplo, la clase Hero2 hereda tanto la propiedad pública name como la propiedad privada address de la clase Person1. La propiedad name es pública y, por lo tanto, se puede acceder directamente a través de la instancia de la clase Hero2. La propiedad address es privada, lo que significa que no se puede acceder directamente desde la instancia de la clase Hero2. Sin embargo, aún puede asignarse a través del constructor de la clase Person1, que es llamado por el constructor de la clase Hero2 utilizando super(realName, 'New York'). */

/* ************************************************************************************************************************ */
/* Herencia y el constructor: Cuando una clase hija no tiene un constructor definido explícitamente, hereda automáticamente el constructor de la clase padre. En este caso, la clase Hero2 tiene su propio constructor, por lo que no hereda automáticamente el constructor de la clase Person1. En cambio, el constructor de la clase Hero2 reemplaza al de la clase Person1. Sin embargo, para que la herencia funcione correctamente, el constructor de la clase Hero2 debe llamar explícitamente al constructor de la clase Person1 mediante super().

En el código, super(realName, 'New York') está llamando al constructor de la clase Person1, que es la clase padre, con el parámetro realName y un valor predeterminado para address ('New York'). Es por eso que funciona sin errores y establece el valor de name a través del constructor de Person1.

Entonces tenemos que, aunque las propiedades privadas se heredan, solo se pueden acceder indirectamente a través de los métodos públicos de la clase padre. Y cuando una clase hija tiene su propio constructor, debe llamar explícitamente al constructor de la clase padre utilizando super() para mantener la cadena de construcción y la funcionalidad de herencia. */

/* ************************************************************************************************************************ */
/* ¿Cuál es la diferencia entre composicion e Inyeccion de dependencias? */
/* Composicion: Creas la instancia de otra clase dentro de clase, en el ejemplo de la clase tienes la Clase Hero donde en el constructor crear una instancia de otra clase que es person: Person, esto es la composición de clases. */
/* Inyeccion de dependencias: En este caso creas tu instancia y se lo pasas como un argumento al crear una instancia de otra clase */
