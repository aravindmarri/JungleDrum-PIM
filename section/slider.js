class Slider extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="bg-blue">
      <div class="container">
        <div class="row py-2 align-items-center">
          <div class="col">
            <div class="pointer-shape">
              <a class="pointer-shape-text" data-slide-index="1" href="">
                Use the reg finder to find <br />
                correct parts for your car
              </a>
              <div class="pointer-shape-arrow"></div>
            </div>
          </div>

          <div class="col">
            <div class="reg-field">
              <div class="px-2 py-1">
                <img src="assets/images/UK-flag.svg" alt="ek flag" />
                <span>GB</span>
              </div>
              <input
                type="password"
                class="inputField w-100"
                placeholder="Enter reg here"
              />
              <button type="submit" class="px-4">GO</button>
            </div>
          </div>
          <div class="col-6 d-flex justify-content-between align-items-center">
            <div class="pointer-shape">
              <a class="pointer-shape-text" data-slide-index="1" href="">
                Or enter <br />
                car details
              </a>
              <div class="pointer-shape-arrow"></div>
            </div>
            <input class="car-details" placeholder="Make" />
            <input class="car-details" placeholder="Model" />
            <input class="car-details" placeholder="Engine" />
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="assets/images/reg finder.png" alt="reg finder poster" />
    </div>
        `;
    }
  }
  
  customElements.define("slider-component", Slider);
  