const name: string = "Strider";
let hpPoints: number | "FULL" = 95;
const isAlive: boolean = true;

hpPoints = "FULL";

console.log({
  name,
  hpPoints,
  isAlive,
});

/* al colocar export {}; entonces este archivo se convierte en un módulo ya que usaremos su funcionalidad en otros archivos y/o modulos */
export {};
