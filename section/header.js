class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div id="myNav" class="overlay">
              <button class="closeBtn" onclick="closeNav()">
                <span class="material-symbols-outlined fw-bold">close</span>
              </button>
              <div class="overlay-content">
                <div class="d-flex flex-row p-4">
                    <div class="flex-column flex-grow-1 me-2">
                        <div class="d-flex flex-row justify-content-between">
                          <span class="material-symbols-outlined mobile-login-icon">shopping_cart</span>
                          <div class="d-flex flex-column">
                            <span class="fw-bold fs-4">Your basket</span>
                            <span class="fw-bold fs-1">£12.00</span>
                          </div>
                        </div>
                        <div class="">
                            <button class="check-out-button">CHECK OUT NOW >></button>
                        </div>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="d-flex flex-column align-items-center flex-grow-1">
                        <span class="material-symbols-outlined mobile-login-icon">account_circle</span>
                        <span>Register</span>
                        <span>/login</span>
                    </div>
                </div>
                
                <div class="menu-container">
                    <div class="" id="accordionFlushExample">
                        <div class="menu-heading">
                            Car parts
                        </div>
                        <div class="accordion-item">
                             <h2 class="accordion-header" id="flush-headingOne">
                                <button class="collapsed-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                  Air Conditioning
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul class="ul-style">
                                      <li class="li-style">Cleaning treatment</li>
                                      <li class="li-style">Condenser</li>
                                      <li class="li-style">Compressor</li>
                                      <li class="li-style">Drier</li>
                                      <li class="li-style">Evaporator</li>
                                      <li class="li-style">Expansion & Flow Control Valve</li>
                                      <li class="li-style">Fitting and Sundries</li>
                                      <li class="li-style">Gas</li>
                                      <li class="li-style">Hoses</li>
                                      <li class="li-style">Leak Detection</li>
                                      <li class="li-style">Miscellaneous</li>
                                      <li class="li-style">Switches & Sensors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                              <button class="collapsed-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Belts Chains & Tensioners
                              </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">
                                <ul class="ul-style">
                                      <li class="li-style">Drive Belt Kits</li>
                                      <li class="li-style">Drive Belts</li>
                                      <li class="li-style">Tensioners & Pulleys</li>          
                                    </ul>
                              </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                           <h2 class="accordion-header" id="flush-headingThree">
                           <button class="collapsed-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Body
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <ul class="ul-style">
                            <li class="li-style">Body Filler </li>
                            <li class="li-style">Body Miscellaneous</li>
                            <li class="li-style">Body Panels & Handles</li>
                            </ul>
                          </div>
                          
                      </div>
                    </div>
                        <div class="accordion-item">
                           <h2 class="accordion-header" id="flush-headingFour">
                           <button class="collapsed-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Braking
                          </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <ul class="ul-style">
                            <li class="li-style">Braking Sensors </li>
                            <li class="li-style">Braking Discs</li>
                            <li class="li-style">Braking Drums</li>
                            </ul>
                          </div>
                         
                      </div>
                    </div>  
                        
                        <div class="menu-heading menu-sub-heading">
                            Car Essentials
                        </div>    
                        <div class="accordion-item">
                           <h2 class="accordion-header" id="flush-headingFive">
                           <button class="collapsed-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Car Audio
                          </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <ul class="ul-style">
                            <li class="li-style">Acoustic Cloth & Carpet</li>
                            <li class="li-style">Aerials & Aerial Adaptors</li>
                            <li class="li-style">Amp & Speaker Wiring</li>
                            <li class="li-style">Audio Fuses</li>
                            </ul>
                          </div>
                          
                      </div>
                    </div>
                        <div class="accordion-item">
                           <h2 class="accordion-header" id="flush-headingSix">
                           <button class="collapsed-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Cleaning
                          </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <ul class="ul-style">
                            <li class="li-style">Air Fresheners</li>
                            <li class="li-style">Bug & Tar Remover</li>
                            <li class="li-style">Car Cleaner</li>
                            <li class="li-style">Carpet & Upholstery</li>
                            </ul>
                          </div>
                          
                      </div>
                    </div>
                        
                        <div class="menu-heading menu-sub-heading">
                            Workshop Supplies
                        </div>    
                        <div class="accordion-item">
                           <h2 class="accordion-header" id="flush-headingSeven">
                           <button class="collapsed-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Office Supplies
                          </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">
                          <ul class="ul-style">
                            <li class="li-style">Batteries</li>
                            <li class="li-style">Catering</li>
                            <li class="li-style">Stationery</li>
                            </ul>
                          </div>
                          
                      </div>
                    </div>       
                    </div> 
              </div>
                
            </div>
            </div>
            <div class="main-header">
                <div class="container">
            <div class="header-container">
        <div class="logo-container">
            <img src="assets/images/logo.min.svg" alt="Parts in Motion" class="logo-img">
        </div>

        <div class="search-login-container">
            <div class="search-container">
                <select id='sel_users' class="search">
                  <optgroup label="Braking">
                      <option value='1'>Brake discs</option>
                      <option value='1'>Brake Drums</option>
                      <option value='1'>Brake Hoses</option>
                  </optgroup>
                  <optgroup label="Engine Parts">
                      <option value='1'>Oil sensor and switches</option>
                      <option value='1'>Sump Plugs and Washer</option>
                  </optgroup><optgroup label="Wash and wipe">
                      <option value='1'>Wiper Arms and Blades</option>
                      <option value='1'>Wiper blade</option>
                  </optgroup>
                </select>
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
            <button class="search-button" onclick="showMenu()">
                <span class="material-symbols-outlined login-icon icon-margin">menu</span>
            </button>
        </div>
    </div>
        </div>
    </div> 
            <div class="black-main-container">
            <div class="container">
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
                      <img src="assets/images/uk_flag.png" alt="UK Flag">
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

let query = {};
let $element = $('#sel_users');
$('#sel_users').val('')

function markMatch (text, term) {
  // Find where the match is
  var match = text.toUpperCase().indexOf(term.toUpperCase());
  var $result = $('<span></span>');

  // If there is no match, move on
  if (match < 0) {
    return $result.text(text);
  }

  // Put in whatever text is before the match
  $result.text(text.substring(0, match));

  // Mark the match
  var $match = $('<span class="select2-rendered__match"></span>');
  $match.text(text.substring(match, match + term.length));

  // Append the matching text
  $result.append($match);

  // Put in whatever is after the match
  $result.append(text.substring(match + term.length));

  return $result;
}

$element.select2({
  maximumSelectionLength: 1,
  dropdownCssClass: "search-dropdown",
  templateResult: function (item) {
    // No need to template the searching text
    if (item.loading) {
      return item.text;
    }

    const term = query.term || '';
    return markMatch(item.text, term);
  },
  language: {
    searching: function (params) {
      // Intercept the query as it is happening
      query = params;

      // Change this to be appropriate for your application
      return 'Searching…';
    }
  },
  multiple: true,
});

$element.val('');


function showMenu() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
