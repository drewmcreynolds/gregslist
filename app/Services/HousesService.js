import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
})
class HousesService {

  async deleteHouse(houseId){
    await api.delete(houseId)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseId)
  }

   async addHouse(houseData) {
    let res = await api.post('', houseData)
    console.log('what was the response', res);
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    
  }
  async getHouses(){
    let response = await api.get()
    console.log('what was the response', response)
    ProxyState.houses = response.data.map(h => new House(h))
    console.log('what is a house', ProxyState.houses)
  }
}

// singleton pattern
export const housesService = new HousesService()