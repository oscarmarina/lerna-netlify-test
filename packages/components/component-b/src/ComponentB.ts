import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {styles} from './styles/component-b-styles.css.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ## `<component-b>`
 * An example element.
 *
 * @attribute heading
 * @attribute counter
 * @fires counterchange - Indicates when the count changes
 * @slot - This element has a slot
 */
export class ComponentB extends LitElement {
  static override styles = [styles];

  /**
   * The heading to say "Hello" to.
   */
  @property({type: String})
  heading = 'Hey there B';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  counter = 5;

  override render() {
    return html`
      <h1>${this.sayHello(this.heading)}!!</h1>
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
   * @param heading The heading to say "Hello" to
   * @returns {string} A greeting directed at `heading`
   */
  sayHello(heading: string): string {
    return `Hello, ${heading}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'component-b': ComponentB;
  }
}
