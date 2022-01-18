import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase User", (t) => {
  const pepe = new User("pepe");
  const comida = new Product("comida perro", 20);
  pepe.addProduct(comida);
  pepe.addProduct(comida);
  pepe.addProduct(comida);

  t.is(pepe.name, "pepe"); // testeo el name
  t.is(pepe.products.length, 3); // testeo que si se añadan los product a la lista
});
test("Testeo la clase Product y sus métodos", (t) => {
  const auto = new Product("fitito", 30);
  t.is(auto.name, "fitito");
  t.is(auto.price, 30);
});
