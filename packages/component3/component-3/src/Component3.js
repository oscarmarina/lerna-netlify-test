import { html, LitElement } from 'lit';
import styles from './styles/Component3-styles.js';

export class Component3 extends LitElement {
  static get is() {
    return 'component-3';
  }

  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      /**
       * The heading to say "Hello" to.
       * @type {string}
       */
      heading: { type: String },

      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.heading = 'Hey there Component 3';
    this.counter = 5;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.heading)}!</h1>
      <button @click=${this._onClick}>Counter: ${this.counter}</button>
      <hr />
      <slot></slot>
    `;
  }

  _onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counter-changed', { detail: this.counter }));
  }

  /**
   * Formats a greeting
   * @param heading {string} The heading to say "Hello" to
   * @returns {string} A greeting directed at `heading`
   */
  sayHello(heading) {
    return `Hello, ${heading}`;
  }
}
