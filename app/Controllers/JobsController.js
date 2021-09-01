import { ProxyState } from "../AppState.js"
import { getJobFormTemplate} from "../forms/jobform.js"
import { jobsService } from "../Services/JobsService.js"


function _drawJobs(){
    let template = ''

    ProxyState.jobs.forEach(job => template += job.CardTemplate)
    
    document.getElementById('listings').innerHTML = template
}

export class JobsController {
    constructor(){
        ProxyState.on('jobs', _drawJobs)
    }

    addJob(){
        event.preventDefault()
        /**
         * @type {HTMLFormElement}
         */
        // @ts-ignore
        const form = event.target


        const jobData = {
            skill: form.skill.value,
            pay: form.pay.value,
            company: form.company.value,
            location: form.location.value,
            description: form.description.value,        
        }
        try {
            jobsService.addJob(jobData)
        } catch (e) {
            form.make.classList.add('border-danger')
            console.error('[TODO] you were supposed to do this', e)
            return
        }
        form.reset()
    }
    showJobs(){
        _drawJobs()
        document.getElementById('controls').innerHTML = `
      <button class="btn btn-danger" onclick="app.jobsController.toggleJobForm()">Add Job</button>
    `


        document.getElementById('forms').innerHTML =
        getJobFormTemplate()
    }
    toggleJobForm(){
        document.getElementById('job-form').classList.toggle('visually-hidden')
    }
}