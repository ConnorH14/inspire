import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";

function _drawList(){

  let completedCount = 0

  if(ProxyState.listItems){
    for(let i = 0; i < ProxyState.listItems.length; i++){
      if(ProxyState.listItems[i].completed){
        completedCount++
      }
    }
  }

  let itemTemplate = ''
  if(ProxyState.listItems){
    ProxyState.listItems.forEach(li => itemTemplate += /*html*/ `
    <li>
      <div class="row">
        <div class="col-8"><span><input onclick="app.listController.isChecked('${li._id}')" class="form-check-input" type="checkbox" id="${li._id}">${li.description}</span></div>
        <div class="col-4"><i onclick="app.listController.deleteItem('${li._id}')"class="fas fa-trash"></i></div>
      </div>
    </li>
    `)
  }
  let listDisplay = document.getElementById('list-display')
  let template = /*html*/ `
    <div class="quote-div p-3">
        <h3>Inbox</h3>
        <small>Completed: ${completedCount}/${ProxyState.listItems.length}</small>
        <hr style="background-color: #b9b9c0;">
        <ul>
        ${itemTemplate}
        </ul>
        <form onsubmit="app.listController.addItem(event)" id="create-list-form">
          <input type="text" placeholder="Item Description" id="description" required minlength="3" maxlength="25" autocomplete="off">
          <button type="submit" ><i class="fas fa-plus-circle"></i></button>
        </form>
    </div>
  `
  listDisplay.innerHTML = template
}

function _checkItems(){
  if(ProxyState.listItems){
    for(let i = 0; i < ProxyState.listItems.length; i++){
      //console.log(ProxyState.listItems[i])
      if(ProxyState.listItems[i].completed){
        console.log(ProxyState.listItems[i])
        document.getElementById(`${ProxyState.listItems[i]._id}`).checked = true
      }
    }
  }
}

export class ListController{
  constructor(){
    sandboxService.getItems()
    ProxyState.on('listItems', _drawList)
    ProxyState.on('listItems', _checkItems)
    _drawList()
  }

  addItem(event){
    event.preventDefault()

    let form = event.target
    let newItem = {
      completed: false,
      description: form.description.value,
      user: 'connor14',
      _id: null
    }

    //ProxyState.listItems = [...ProxyState.listItems, newItem]

    sandboxService.addItem(newItem)

    //console.log(ProxyState.listItems)
    document.getElementById("create-list-form").reset()
  }

  deleteItem(item){
    sandboxService.deleteItem(item)
  }

  isChecked(item){
    let checkItem = ProxyState.listItems.find(li => li._id == item)
    if(checkItem.completed){
      checkItem.completed = false
      //console.log(checkItem)
      sandboxService.isChecked(checkItem, true)
    }else{
      checkItem.completed = true
      //console.log(checkItem)
      sandboxService.isChecked(checkItem, false)
    }
    _drawList()
    _checkItems()
  }
}