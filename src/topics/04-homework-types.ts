interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string; // forma 1
  // showAddress(): string; // forma 2
}

interface Address {
  street: string;
  country: string;
  city: string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHeroe.showAddress();
console.log(address);

export {};
