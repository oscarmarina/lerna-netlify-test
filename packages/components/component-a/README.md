![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

## `<component-a>`
An example element.


### `src/ComponentA.ts`:

#### class: `ComponentA`, `component-a`

##### Fields

| Name      | Privacy | Type     | Default         | Description                                      | Inherited From |
| --------- | ------- | -------- | --------------- | ------------------------------------------------ | -------------- |
| `heading` |         | `string` | `'Hey there A'` | The heading to say "Hello" to.                   |                |
| `counter` |         | `number` | `5`             | The number of times the button has been clicked. |                |

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
| `js` | `ComponentA` | ComponentA  | src/ComponentA.ts |         |

### `src/index.ts`:

#### Exports

| Kind | Name         | Declaration | Module          | Package |
| ---- | ------------ | ----------- | --------------- | ------- |
| `js` | `ComponentA` | ComponentA  | ./ComponentA.js |         |

### `src/define/component-a.ts`:

#### Exports

| Kind                        | Name          | Declaration | Module             | Package |
| --------------------------- | ------------- | ----------- | ------------------ | ------- |
| `custom-element-definition` | `component-a` | ComponentA  | /src/ComponentA.js |         |

### `src/styles/component-a-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                               | Package |
| ---- | -------- | ----------- | ------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/component-a-styles.css.ts |         |
