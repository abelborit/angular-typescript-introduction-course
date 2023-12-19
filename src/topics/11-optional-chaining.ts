export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Fernando",
};

const passenger2: Passenger = {
  name: "Melissa",
  children: ["Natalia", "Elizabeth"],
};

const returnChildrenNumber = (passenger: Passenger): number => {
  /* encadenamiento opcional u optional chaining que sería el ? para simbolizar que si existe la propiedad entonces haga algo determinado que en este caso sería sacar el largo del arreglo con el .length y si no entonces no haga nada, ya que por ejemplo en passenger1 no viene children porque es opcional en la interface pero si fuera obligatorio entonces debería ir un array vacío donde la propiedad sí existiría pero no tendría ningún valor y ahí ya no sería necesario el optional chaining "?" */
  const howManyChildren = passenger.children?.length || 0;

  /* usando el non null assertion operator */
  // if (!passenger.children) return 0; // se coloca esta validación para evitar que cuando se coloca el "!" entonces TypeScript nos de un error de que undefined no se le puede asignar .length, entonces sería hacer una validación previar y luego usar el "!" para evitar inconsistencias y errores en el código
  // const howManyChildren = passenger.children!.length; // de esta forma se le dice a TypeScript que siempre recibirá el valor que le estamos mandando (para realizar eso hay que revisar bien qué se está haciendo y estar seguro de lo que se hace)

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
