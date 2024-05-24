import { DrinkMaker } from "./DrinkMaker.js"

export class CoffeeMachine {
  constructor(private readonly drinkMaker: DrinkMaker) {}

  selectTea() {}
  selectChocolate() {}
  selectCoffee() {}
  addSugar() {}
  addStick() {}
  makeDrink() {}
}
