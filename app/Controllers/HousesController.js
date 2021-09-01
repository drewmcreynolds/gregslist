import { ProxyState } from "../AppState.js"
import { getHouseFormTemplate } from "../forms/houseform.js"
import { housesService } from "../Services/HousesService.js"



function _drawHouses() {
  let template = ''
  
  ProxyState.houses.forEach(house => template += house.CardTemplate)

  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  addHouse(){
    event.preventDefault() // do not forget this line on form submissions
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    // TODO get data from form

    const houseData = {
      year: form.year.value,
      location: form.location.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }

    try {
      housesService.addHouse(houseData)
    } catch (e) {
      // TODO draw errors
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    }

    form.reset()
  }
  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    
    document.getElementById('forms').innerHTML = 
      getHouseFormTemplate()
    }

  toggleHouseForm() {
          document.getElementById('house-form').classList.toggle('visually-hidden')
  }

}