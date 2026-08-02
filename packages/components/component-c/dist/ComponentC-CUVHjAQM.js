import { styles } from "./styles/component-c-styles.css.js";
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
//#region \0@oxc-project+runtime@0.142.0/helpers/esm/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
//#endregion
//#region src/ComponentC.ts
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
var ComponentC = class extends LitElement {
	constructor(..._args) {
		super(..._args);
		this.heading = "Hey there C";
		this.counter = 5;
	}
	static {
		this.styles = [styles];
	}
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
		this.dispatchEvent(new CustomEvent("counterchange", { detail: this.counter }));
	}
	/**
	* Formats a greeting
	* @param heading The heading to say "Hello" to
	* @returns {string} A greeting directed at `heading`
	*/
	sayHello(heading) {
		return `Hello, ${heading}`;
	}
};
__decorate([property({ type: String })], ComponentC.prototype, "heading", void 0);
__decorate([property({ type: Number })], ComponentC.prototype, "counter", void 0);
//#endregion
export { ComponentC as t };
