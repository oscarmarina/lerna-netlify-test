import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    box-sizing: border-box;
    background-color: olive;
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
