import { DrinkMaker } from "./DrinkMaker.js"

export class DrinkMakerFake implements DrinkMaker {
  public instructions = ""

  execute(instructions: string) {
    this.instructions = instructions
  }
}
