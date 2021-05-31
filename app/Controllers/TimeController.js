let fullTimeDisplay = document.getElementById('full-time-display')
let halfTimeDisplay = document.getElementById('half-time-display')

function _drawFullTime(){

  setInterval(function(){
    let currentTime = new Date()
    let currentMinutes = currentTime.getMinutes() > 9 ? currentTime.getMinutes() : '0' + currentTime.getMinutes()
    let currentSeconds = currentTime.getSeconds() > 9 ? currentTime.getSeconds() : '0' + currentTime.getSeconds()
    fullTimeDisplay.innerHTML = /*hmtl*/`
    <h1>${currentTime.getHours()}:${currentMinutes}.${currentSeconds}</h1>
    `
  }, 1000);

}

function _drawHalfTime(){

  setInterval(function(){
    let currentTime = new Date()
    let currentHours = currentTime.getHours() > 12 ? currentTime.getHours() - 12: currentTime.getHours()
    currentHours = currentHours == 0 ? currentHours = 12: currentHours = currentHours;
    let currentMinutes = currentTime.getMinutes() > 9 ? currentTime.getMinutes() : '0' + currentTime.getMinutes()
    let currentSeconds = currentTime.getSeconds() > 9 ? currentTime.getSeconds() : '0' + currentTime.getSeconds()
    halfTimeDisplay.innerHTML = /*hmtl*/`
    <h1>${currentHours}:${currentMinutes}.${currentSeconds}</h1>
    `
  }, 1000);

}

export class TimeController{
  constructor(){
    _drawFullTime()
    _drawHalfTime()
  }

  changeTime(to){
    if(to == 'toHalf'){
      fullTimeDisplay.classList.add('d-none')
      halfTimeDisplay.classList.remove('d-none')
    }else if(to == 'toFull'){
      fullTimeDisplay.classList.remove('d-none')
      halfTimeDisplay.classList.add('d-none')
    }
  }

}