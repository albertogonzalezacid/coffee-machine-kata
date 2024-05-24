import { describe, expect, it, vi } from "vitest"
import { DrinkMakerReal } from "./DrinkMakerReal.js"
import { CoffeeMachine } from "./CoffeeMachine.js"
import { DrinkMakerFake } from "./DrinkMakerFake.js"

describe("CoffeeMachine", () => {
  it("makes 1 tea with 1 sugar and a stick", () => {
    const drinkMaker = new DrinkMakerReal()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectTea()
    coffeeMachine.addSugar()
    coffeeMachine.makeDrink()

    expect(drinkMaker.execute).toHaveBeenCalledWith("T:1:0")
  })

  it("makes 1 chocolate with no sugar and therefore no stick", () => {
    const drinkMaker = new DrinkMakerFake()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectChocolate()
    coffeeMachine.makeDrink()

    expect(drinkMaker.instructions).toBe("H::")
  })

  it("makes 1 coffee with no sugar and therefore no stick", () => {
    const drinkMaker = new DrinkMakerFake()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectCoffee()
    coffeeMachine.makeDrink()

    expect(drinkMaker.instructions).toBe("C::")
  })

  it("makes 1 tea with no sugar and therefore no stick", () => {
    const drinkMaker = new DrinkMakerFake()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectTea()
    coffeeMachine.makeDrink()

    expect(drinkMaker.instructions).toBe("T::")
  })

  it("error when no drink is selected", () => {
    const drinkMaker = new DrinkMakerFake()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.makeDrink()

    expect(drinkMaker.instructions).toBe("M:Selecciona una bebida antes")
  })

  it("makes 1 coffee with 1 sugars and a stick", () => {
    const drinkMaker = new DrinkMakerFake()
    const coffeeMachine = new CoffeeMachine(drinkMaker)

    coffeeMachine.selectCoffee()
    coffeeMachine.addSugar()
    coffeeMachine.makeDrink()

    expect(drinkMaker.instructions).toBe("C:1:0")
  })
})
