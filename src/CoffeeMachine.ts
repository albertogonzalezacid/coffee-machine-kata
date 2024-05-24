import { DrinkMaker } from "./DrinkMaker.js"

export class CoffeeMachine {
  private selectedDrink = ""

  constructor(private readonly drinkMaker: DrinkMaker) {}

  selectTea() {
    this.selectedDrink = "T::"
  }

  selectChocolate() {
    this.selectedDrink = "H::"
  }

  selectCoffee() {
    this.selectedDrink = "C::"
  }

  addSugar() {}
  addStick() {}

  makeDrink() {
    this.drinkMaker.execute(this.selectedDrink)
  }
}
