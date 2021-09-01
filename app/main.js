// imp;ort ValuesController from "./Controllers/ValuesController.js"
import { SnackController } from "./Controllers/SnackController.js";


class App{
  snackController = new SnackController()
}



window["app"] = new App();
