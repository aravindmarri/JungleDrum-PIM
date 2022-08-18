class Slider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="bg-blue">
      <div class="container">
        <div class="row py-2 align-items-center flex-wrap">
          <div class="col-xxl-2 col-md-4 col-sm-12">
            <div class="pointer-shape">
              <a class="pointer-shape-text" data-slide-index="1" href="">
                Use the reg finder to find 
                correct parts for your car
              </a>
              <div class="pointer-shape-arrow"></div>
            </div>
          </div>

          <div class="col-xxl-3 col-md-5 col-sm-12 py-xxl-0 py-md-3">
            <div class="reg-field">
              <div class="px-2 py-1">
                <img src="assets/images/UK-flag.svg" alt="ek flag" />
                <span>GB</span>
              </div>
              <input
                class="inputField w-100"
                placeholder="Enter reg here"
              />
              <button type="submit" class="px-4">GO</button>
            </div>
          </div>
          <div class="car-details col-12 col-xxl-7 d-flex justify-content-between align-items-center">
            <div class="pointer-shape me-3">
              <a class="pointer-shape-text d-md-block d-none" data-slide-index="1" href="">Or enter
                car details
              </a>
              <a class="pointer-shape-text d-md-none d-block" data-slide-index="1" href="">
                Or click here to search for your vehicle >
              </a>
              <div class="pointer-shape-arrow"></div>
            </div>
            <select id='carMake' class="ms-2">
                  <optgroup label="Braking">
                      <option value=1>Brake discs</option>
                      <option value=2>Brake Drums</option>
                      <option value=3>Brake Hoses</option>
                  </optgroup>
                  <optgroup label="Engine Parts">
                      <option value=4>Oil sensor and switches</option>
                      <option value=5>Sump Plugs and Washer</option>
                  </optgroup><optgroup label="Wash and wipe">
                      <option value=6>Wiper Arms and Blades</option>
                      <option value=7>Wiper blade</option>
                  </optgroup>
                </select>
            <select id='carModel'>
                  <optgroup label="Braking">
                      <option value=2>Brake Drums</option>
                      <option value=3>Brake Hoses</option>
                  </optgroup>
                  <optgroup label="Engine Parts">
                      <option value=4>Oil sensor and switches</option>
                      <option value=5>Sump Plugs and Washer</option>
                  </optgroup><optgroup label="Wash and wipe">
                      <option value=6>Wiper Arms and Blades</option>
                      <option value=7>Wiper blade</option>
                  </optgroup>
                </select>
            <select id='carEngine'>
                  <optgroup label="Braking">
                      <option value=3>Brake Hoses</option>
                      <option value=1>Brake discs</option>
                      <option value=2>Brake Drums</option>
                  </optgroup>
                  <optgroup label="Engine Parts">
                      <option value=4>Oil sensor and switches</option>
                      <option value=5>Sump Plugs and Washer</option>
                  </optgroup><optgroup label="Wash and wipe">
                      <option value=6>Wiper Arms and Blades</option>
                      <option value=7>Wiper blade</option>
                  </optgroup>
                </select>
            
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="assets/images/reg finder.png" alt="reg finder poster" class="mw-100 d-md-inline d-none" />
      <img src="assets/images/reg finder mobile.png" alt="reg finder poster" class="w-100 d-md-none d-block" />
    </div>
        `;
  }
}
customElements.define("slider-component", Slider);

$('#carMake').select2({
  placeholder: "",
  dropdownCssClass: "car-dropdown",
});

$('#carModel').select2({
  placeholder: "",
  dropdownCssClass: "car-dropdown",
});
$('#carEngine').select2({
  placeholder: "",
  dropdownCssClass: "car-dropdown",
});



