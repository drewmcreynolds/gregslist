export function getHouseFormTemplate() {
    return /*html*/`
    <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
    id="house-form">
    
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input type="number" class="form-control" name="price" id="price" min="25000" max="99999999">
    </div>
    <div class="form-group">
    <label for="location" class="">Location:</label>
    <input type="location" class="form-control" name="location" id="location">
    </div>
    <div class="form-group">
    <label for="year" class="">year:</label>
    <input type="year" class="form-control" name="year" id="year">
    </div>
    <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
    </div>
    <div class="form-group">
    <label for="img" class="">img:</label>
    <input type="url" class="form-control" name="img" id="img" required>
    </div>
    <div class="form-group">
      <label for="NWQ" class="">Is this a new build?</label>
      <input type="checkbox" name="NWQ" id="NWQ" checked>
    </div>
    <div class="button-group my-3">
      <button type="reset" class="btn btn-secondary">clear</button>
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  </form>
    `
  }