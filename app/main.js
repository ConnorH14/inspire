import { BackgroundController } from "./Controllers/BackgroundController.js";
import { ListController } from "./Controllers/ListController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  timeController = new TimeController()

  backgroundController = new BackgroundController()

  weatherController = new WeatherController()

  listController = new ListController

  quoteController = new QuoteController()
}

window["app"] = new App();
