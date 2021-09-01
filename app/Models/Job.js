import { generateId } from "../Utils/generateId.js";


export class Job {
    constructor(jobData){
        this.id = jobData.id || generateId()
        this.description = jobData.description
        this.skill = jobData.skill
        this.pay = jobData.pay
        this.company = jobData.company
        this.location = jobData.location
    }

    get CardTemplate(){
        return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span >${this.company} - ${this.location}</span>
            <span>$ ${this.pay}</span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
    }
}