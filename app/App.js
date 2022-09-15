import { GiftsController } from "./Controllers/GiftsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  giftsController = new GiftsController()
}

window["app"] = new App();
