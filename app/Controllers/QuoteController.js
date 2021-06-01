import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";

function _drawQuote(){
  document.getElementById('quote-display').innerHTML = /*html*/ `
  <h6>"${ProxyState.quote.content}"</h6>
  <small class="author">- ${ProxyState.quote.author}</small>
  `
}
export class QuoteController{
  constructor(){
    ProxyState.on('quote', _drawQuote)
    sandboxService.getQuote()
  }
}