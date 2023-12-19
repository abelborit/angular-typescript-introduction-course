export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation({ tax, products }: TaxCalculationOptions ): [number, number] {
export function taxCalculation(
  options: TaxCalculationOptions
): [number, number] {
  const { tax, products } = options;

  // let total = 0;
  // products.forEach(({ price }) => {
  //   total += price;
  // });

  /* reduce es una solución más optima que forEach, para fines educativos ambas son útiles, pero si nos preocupa un poco el performance de la app entonces reduce es mejor porque literalmente devuelve un solo valor, en cambio con forEach tienes todo el elemento hijo del array cada vez que itera */
  const total = products.reduce(
    (acumulator, currentElement) => (acumulator += currentElement.price),
    0
  );

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15; // impuesto sobre la venta para cobrarle sobre el producto

const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax, // tax: tax,
});

console.log("Total", total);
console.log("Tax", taxTotal);
