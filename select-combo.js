import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `select-combo`
 * a custom select-combo
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SelectCombo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'select-combo',
      },
    };
  }
}

window.customElements.define('select-combo', SelectCombo);
