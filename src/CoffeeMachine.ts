import { DrinkMaker } from "./DrinkMaker.js"

export class CoffeeMachine {
  private selectedDrink = ""
  private sugarQuantity = 0
  private stick = false

  constructor(private readonly drinkMaker: DrinkMaker) {}

  selectTea() {
    this.selectedDrink = "T"
  }

  selectChocolate() {
    this.selectedDrink = "H"
  }

  selectCoffee() {
    this.selectedDrink = "C"
  }

  addSugar() {
    this.sugarQuantity += 1

    this.addStick()
  }

  private addStick() {
    this.stick = true
  }

  makeDrink() {
    if (!this.selectedDrink) this.drinkMaker.execute("M:Selecciona una bebida antes")
    else
      this.drinkMaker.execute(
        `${this.selectedDrink}:${this.sugarQuantity > 0 ? this.sugarQuantity : ""}:${this.stick ? 0 : ""}`,
      )
  }
}
