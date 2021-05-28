import { BackgroundController } from "./Controllers/BackgroundController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  timeController = new TimeController()

  backgroundController = new BackgroundController()

  weatherController = new WeatherController()

  quoteController = new QuoteController()
}

window["app"] = new App();
