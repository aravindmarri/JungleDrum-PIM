class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        
            <div class="main-header">
                <div class="content-wrap">
            <div class="header-container">
        <div class="logo-container">
            <img src="../assets/images/logo.min.svg" alt="Parts in Motion" class="logo-img">
        </div>

        <div class="search-login-container">
            <div class="search-container">
                <input type="text" class="search-input">
                <div class="search-icon-container">
                    <span class="material-symbols-outlined search-icon">search</span>
                </div>
            </div>
            <div class="login-container">
                <span class="material-symbols-outlined login-icon">account_circle</span>
                <span class="login-text">Register</span>
                <span class="login-text">/login</span>
            </div>
            <div class="vertical-line"></div>
            <div class="cart-container">
                <span class="material-symbols-outlined login-icon">shopping_cart</span>
                <span class="price-text">£12.00</span>
            </div>
        </div>
        
       <div class="search-login-mobile-container">
            <button class="search-button">
                <span class="material-symbols-outlined search-icon">search</span>
            </button>
            <div class="vertical-line"></div>
            <span class="material-symbols-outlined login-icon icon-margin">shopping_cart</span>
            <div class="vertical-line"></div>
            <span class="material-symbols-outlined login-icon icon-margin">menu</span>
        </div>
    </div>
        </div>
    </div> 
            <div class="black-main-container">
            <div class="black-content-wrap">
              <div class="black-details-container">
                  <div class="details-container">
                      <span class="text">Clutch parts
                          <span class="arrow-icon">></span>
                      </span>
                      <span class="text">Braking
                          <span class="arrow-icon">></span>
                      </span>
                      <span class="text">Engine Parts
                          <span class="arrow-icon">></span>
                      </span>
                      <span class="text">Exhaust parts
                          <span class="arrow-icon">></span>
                      </span>
                      <span class="text">Wash & wipe
                          <span class="arrow-icon">></span>
                      </span>
                      <span class="text">Steering & suspension
                          <span class="arrow-icon">></span>
                      </span>
                  </div>
                  <div class="right-container">
                      <img src="../assets/images/UK_Flag.png" alt="UK Flag">
                      <span class="logo-text">Proud to be a UK-based company</span>
                      <div class="contact-container">
                          <span class="material-symbols-outlined contact-logo">contact_support</span>
                          <span >Contact us</span>
                      </div>
                  </div>
              </div>
            </div>
            </div>
    
      `;
  }
}

customElements.define("header-component", Header);
