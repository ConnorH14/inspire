import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";

function _drawBackground(){
  document.getElementById('body-background').style = `background-image: url('${ProxyState.backgroundImg.url}')`
  document.getElementById('img-display').innerHTML = /*html*/`
  <small>${ProxyState.backgroundImg.id} ${ProxyState.backgroundImg.site}</small>
  `
}

export class BackgroundController{
  constructor(){
    ProxyState.on('backgroundImg', _drawBackground)
    sandboxService.getBackgroundImg()
  }
}