![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

## `<component-c>`
An example element.


### `src/ComponentC.js`:

#### class: `ComponentC`, `component-c`

##### Fields

| Name      | Privacy | Type     | Default       | Description                                      | Inherited From |
| --------- | ------- | -------- | ------------- | ------------------------------------------------ | -------------- |
| `heading` | public  | `string` | `'Hey there'` | The heading to say "Hello" to.                   |                |
| `counter` | public  | `number` | `15`          | The number of times the button has been clicked. |                |

##### Methods

| Name       | Privacy | Description        | Parameters        | Return   | Inherited From |
| ---------- | ------- | ------------------ | ----------------- | -------- | -------------- |
| `sayHello` |         | Formats a greeting | `heading: string` | `string` |                |

##### Events

| Name            | Type          | Description                      | Inherited From |
| --------------- | ------------- | -------------------------------- | -------------- |
| `counterchange` | `CustomEvent` | Indicates when the count changes |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `heading` | heading |                |
| `counter` | counter |                |

##### Slots

| Name | Description             |
| ---- | ----------------------- |
|      | This element has a slot |

<details><summary>Private API</summary>

##### Methods

| Name       | Privacy | Description | Parameters | Return | Inherited From |
| ---------- | ------- | ----------- | ---------- | ------ | -------------- |
| `#onClick` | private |             |            |        |                |

</details>

<hr/>

#### Exports

| Kind | Name         | Declaration | Module            | Package |
| ---- | ------------ | ----------- | ----------------- | ------- |
| `js` | `ComponentC` | ComponentC  | src/ComponentC.js |         |

### `src/index.js`:

#### Exports

| Kind | Name         | Declaration | Module          | Package |
| ---- | ------------ | ----------- | --------------- | ------- |
| `js` | `ComponentC` | ComponentC  | ./ComponentC.js |         |

### `src/define/component-c.js`:

#### Exports

| Kind                        | Name          | Declaration | Module             | Package |
| --------------------------- | ------------- | ----------- | ------------------ | ------- |
| `custom-element-definition` | `component-c` | ComponentC  | /src/ComponentC.js |         |

### `src/styles/component-c-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                               | Package |
| ---- | -------- | ----------- | ------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/component-c-styles.css.js |         |
