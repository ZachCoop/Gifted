

export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
  }


  get giftTemplate() {
    return /*HTML*/ `
    <div class="col-md-3">
            <div onclick="app.giftsController.toggleOpened('${this.id}')" class="card" >
    <img class="image-fluid" src="${this.opened ? this.url : 'https://thumbs.dreamstime.com/b/present-box-3007278.jpg'}">
    
      <div class="card-body">
        <p>${this.tag}</p>
      </div>
    </div>
          </div >
  `
  }
}