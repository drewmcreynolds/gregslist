

export class House {
    constructor(houseData) {
        this.id = houseData.id     
        this.year = houseData.year
        this.description = houseData.description
        this.price = houseData.price
        this.levels = houseData.levels
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.imgUrl = houseData.imgUrl
      }

      get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="${this.imgUrl}" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span >${this.bedrooms} -${this.bathrooms}- ${this.year}</span>
                <span>$ ${this.price}</span>
              </h5>
              <p>${this.description}</p>
              <button class="btn btn-success" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
            </div>
          </div>
        </div>
        `
      }
}