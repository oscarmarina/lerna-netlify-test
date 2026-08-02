import { css } from "lit";
//#region src/styles/component-a-styles.css.ts
var styles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
//#endregion
export { styles };
