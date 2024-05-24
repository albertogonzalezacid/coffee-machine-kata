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
    if (!this.selectedDrink) this.drinkMaker.execute("M:Selecciona una bebida antes")
    else this.drinkMaker.execute(this.selectedDrink)
  }
}
