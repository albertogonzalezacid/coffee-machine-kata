import { describe, expect, it } from "vitest"
import { DrinkMaker } from "./DrinkMaker.js"
import { CoffeeMachine } from "./CoffeeMachine.js"

describe("CoffeeMachine", () => {
  it("makes 1 tea with 1 sugar and a stick", () => {
    const drinkMaker = new DrinkMaker()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectTea()
    coffeeMachine.addSugar()
    coffeeMachine.addStick()
    coffeeMachine.makeDrink()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T:1:0")
  })

  it("1 chocolate with no sugar and therefore no stick", () => {
    const drinkMaker = new DrinkMaker()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectChocolate()
    coffeeMachine.makeDrink()

    expect(drinkMaker.execute).toHaveBeenCalledWith("H::")
  })
})
