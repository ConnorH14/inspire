function _drawList(){
  let listDisplay = document.getElementById('list-display')
  let template = /*html*/ `
    <div class="quote-div p-3">
        <h3>Inbox</h3>
        <hr style="background-color: #b9b9c0;">
        <ul>
        </ul>
        <form onsubmit="app.listController.addItem(event)" id="create-list-form">
          <input type="text" placeholder="Item Description" id="description">
          <button type="submit" ><i class="fas fa-plus-circle"></i></button>
        </form>
    </div>
  `
  listDisplay.innerHTML = template
}

export class ListController{
  constructor(){
    _drawList()
  }

  addItem(event){
    event.preventDefault()

    let form = event.target
    let newItem = {
      description: form.description.value
    }
    console.log(newItem)
    document.getElementById("create-list-form").reset()
  }
}