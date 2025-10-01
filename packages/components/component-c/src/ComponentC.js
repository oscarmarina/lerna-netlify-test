import {html, LitElement} from 'lit';
import {styles} from './styles/component-c-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ## `<component-c>`
 * An example element.
 *
 * @attribute heading
 * @attribute counter
 * @fires counterchange - Indicates when the count changes
 * @slot - This element has a slot
 */
export class ComponentC extends LitElement {
  /**
   * @override
   */
  static styles = [styles];

  /**
   * @override
   */
  static properties = {
    /**
     * The heading to say "Hello" to.
     */
    heading: {type: String},

    /**
     * The number of times the button has been clicked.
     */
    counter: {type: Number},
  };

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 15;
  }

  /**
   * @override
   */
  render() {
    return html`
      <h1>${this.sayHello(this.heading)}!</h1>
      <button @click=${this.#onClick}>Counter: ${this.counter}</button>
      <hr />
      <slot></slot>
    `;
  }

  #onClick() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('counterchange', {detail: this.counter}));
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
