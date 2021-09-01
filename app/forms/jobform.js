export function getJobFormTemplate() {
    return /*html*/`
    <form class ="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()" id="job-form">

    <div class="form-group">
      <label for="pay" class="">Pay:</label>
      <input type="number" class="form-control" name="pay" id="pay" min="25000" max="99999999" required>
    </div>
    <div class="form-group">
    <label for="location" class="">Location:</label>
    <input type="location" class="form-control" name="location" id="location" required>
    </div><div class="form-group">
    <label for="company" class="">Company:</label>
    <input type="text" class="form-control" name="company" id="company" required >
    </div>
    <div class="form-group">
    <label for="skill" class="">Skill:</label>
    <input type="text" class="form-control" name="skill" id="skill">
    </div>
    <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
    </div>
      <div class="form-group">
      <label for="NWQ" class="">Is this a full-time postion?</label>
      <input type="checkbox" name="NWQ" id="NWQ" checked>
    </div>
    <div class="button-group my-3">
      <button type="reset" class="btn btn-secondary">clear</button>
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  </form>    
    `
  }