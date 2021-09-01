import { generateId } from "../Utils/generateId.js"

export class House {
    constructor(houseData) {
        this.id = houseData.id || generateId()        
        this.year = houseData.year
        this.description = houseData.description
        this.price = houseData.price
        this.location = houseData.location
        this.img = houseData.img
      }

      get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="${this.img}" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span >${this.location} - ${this.year}</span>
                <span>$ ${this.price}</span>
              </h5>
              <p>${this.description}</p>
            </div>
          </div>
        </div>
        `
      }
}