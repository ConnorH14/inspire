import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";


function _drawWeather(){
  let tempF = Math.round((ProxyState.weather.main.temp - 273.15) * 9/5 + 32)
  let tempC = Math.round(ProxyState.weather.main.temp - 273.15)
  document.getElementById('weather-display').innerHTML = /*html*/ `
  <span><img src="http://openweathermap.org/img/wn/${ProxyState.weather.weather[0].icon}.png"></span>
  <span>${ProxyState.weather.weather[0].main}</span>
  <p onclick="app.weatherController.switchTemp('toF')" class="temp-button" id="temp-c-display">${tempC}°C</p>
  <p onclick="app.weatherController.switchTemp('toC')" class="temp-button d-none" id="temp-f-display">${tempF}°F</p>
  `
}
export class WeatherController{
  constructor(){
    ProxyState.on('weather', _drawWeather)
    sandboxService.getWeather()
  }

  switchTemp(to){
    if(to == 'toF'){
      document.getElementById('temp-c-display').classList.add('d-none')
      document.getElementById('temp-f-display').classList.remove('d-none')
    }else if(to == 'toC'){
      document.getElementById('temp-c-display').classList.remove('d-none')
      document.getElementById('temp-f-display').classList.add('d-none')
    }

  }
}