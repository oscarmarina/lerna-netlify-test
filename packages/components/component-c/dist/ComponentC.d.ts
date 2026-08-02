import { LitElement } from 'lit';
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
export declare class ComponentC extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    /**
     * The heading to say "Hello" to.
     */
    heading: string;
    /**
     * The number of times the button has been clicked.
     */
    counter: number;
    render(): import("lit").TemplateResult<1>;
    /**
     * Formats a greeting
     * @param heading The heading to say "Hello" to
     * @returns {string} A greeting directed at `heading`
     */
    sayHello(heading: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'component-c': ComponentC;
    }
}
//# sourceMappingURL=ComponentC.d.ts.map