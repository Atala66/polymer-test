import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import {
  WiredButton,
  WiredInput
} from "wired-elements";

// MUST delete node modules inside this component --WHY?? duplicated dependencies??
import '@polymer/paper-checkbox/paper-checkbox.js';

import '@polymer/paper-input/paper-input.js';
/* why it doesn`t work?? 
appears in DOM but not render on screen
<iron-icon icon="check"></iron-icon>
*/
import '@polymer/iron-icon/iron-icon.js';

import '@polymer/iron-meta/iron-meta.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-button/paper-button.js';

// paper dropdown 3 components needed
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';

/*
 deprecated USE POLYFILLS!!!
import '@polymer/neon-animation-polymer-3/neon-animation-polymer-3.js';
*/


// my styles
import './shared-styles.js';


class TestElement extends PolymerElement {
  static get template() {
    return html `
        <style> 
           header{
            padding-left: 60px;
           }

           div,
          .form{
           padding-left:20px;
          }

          .form {
            max-width: 400px;
            margin-left: 20px;
          }

          .submit-btn{
              margin-left:0px;
              background-color:rgb(68, 132, 244);
              font-weight:bold;
              padding: 10px 40px;

          }

          paper-dropdown-menu{
            padding-left: 180px;
          }

          paper-item{
            cursor:pointer;
          }
        </style>

          
        <header><h2 class="title">Form Component</h2></header>

        <div>
    
       <iron-form id="ironForm">

       <form class="form" id="form" method="get" action="/form/handler">

       <paper-input label="Name" name="name" value="{{ name }}"></paper-input>
       <paper-input label="Last Name" name="lastName" value="{{ lastName }}"></paper-input>
       <paper-input label="Adress" name="adress" value="{{ adress }}"></paper-input>
       <paper-input label="Telephone Number"
        name="telephoneNumber"
        value="{{ telephoneNumber }}"
        max-length="9"></paper-input>
       <paper-input label="email" value="{{ email }}">
       <iron-icon icon="add"></iron-icon>
       <div slot="suffix" name="name">@email.com</div>

       <h5>Select your country</h5>
       </paper-input>
       <paper-dropdown-menu label="Country">
       <paper-listbox slot="dropdown-content"
        selected="1"
        selected="{{ selectedCountry }}"
        attr-for-selected="selectedCountry">
        <template is="dom-repeat"
        items="[[  countries  ]]" as="countries"
        ></template>
        <paper-item selectedCountry="[[country.id]]">[[country.name]]</paper-item>
        </template>
       </paper-listbox>
       </paper-dropdown-menu>
       <br>

       <paper-button 
       raised class="submit-btn"
        on-tap="getFormData">Submit</paper-button>
        <br><br>
        <paper-button
        raised on-tap="connectedCallBack">Connected Callback</paper-button>
  
       </form>

       </iron-form>

     </div>

    `
  }

  static get properties() {
    // definition of the attr of the component
    return {
      name: String,
      lastName: String,
      adress: String,
      country: {
        id: String,
        name: String,
        notify: true // If true, the property is available for two-way data binding. 
        //In addition, an event, property-name-changed is fired whenever the property changes
      },
      listeners: {
        'click': 'regular'
      },
      regular: function (e) {
        console.log('regular')
      }
    }

    // donde se hacen ACCESIBLES las propiedades para toda la clase??
    /*constructor() {
      super(); */

      this.name= "Lucy Swan";

      this.countries = [{
          id: "Spain",
          name: "spain_country"
        },
        {
          id: "Morocco",
          name: "morocco_country"
        },
        {
          id: "USA",
          name: "usa_country"
        }
      ]
      console.log(this.countries);
    }

    
  //} 



  // methods

  // WTF??
  connectedCallback() {
    super.connectedCallback();

    this.showProperties = 'Hello everybody , my user is ' + (this.fullName || 'nobody') + '.\n' +
      'This user is  from ' + (this.country ? '' : 'not') + ' from that other country.';
    console.log('my element created!!');
    console.log(this.showProperties);
  }





  getFormData() {
    var formData = {
      name: this.name,
      lastName: this.lastName,
      fullName: this.fullName(this.name, this.lastName),
      adress: this.adress,
      telephoneNumber: this.telephoneNumber,
      email: this.email,
      country: 'how get it??'
    };
    this.$.ironForm.submit();
    console.log(formData);

  }

  fullName(name, lastName) {
    var fullName = name.concat(' ').concat(lastName);
    console.log(fullName);
    return fullName;
  }

  showCountries() {
    alert(this.countries);
  }



}

window.customElements.define('test-element', TestElement);