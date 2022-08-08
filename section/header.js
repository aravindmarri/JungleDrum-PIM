class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header class="header-container">
        <div class="logo-container">
            <img src="assets/images/logo.min.svg" alt="Parts in Motion">
        </div>

        <div class="search-login-container">
            <div class="search-container">
                <input type="text" class="search-input">
                <span class="material-symbols-outlined search-icon">search</span>
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
    </header>
      `;
  }
}

customElements.define("header-component", Header);
