![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

## `<component-b>`
An example element.


### `src/ComponentB.js`:

#### class: `ComponentB`, `component-b`

##### Fields

| Name      | Privacy | Type     | Default       | Description                                      | Inherited From |
| --------- | ------- | -------- | ------------- | ------------------------------------------------ | -------------- |
| `heading` | public  | `string` | `'Hey there'` | The heading to say "Hello" to.                   |                |
| `counter` | public  | `number` | `10`          | The number of times the button has been clicked. |                |

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
| `js` | `ComponentB` | ComponentB  | src/ComponentB.js |         |

### `src/index.js`:

#### Exports

| Kind | Name         | Declaration | Module          | Package |
| ---- | ------------ | ----------- | --------------- | ------- |
| `js` | `ComponentB` | ComponentB  | ./ComponentB.js |         |

### `src/define/component-b.js`:

#### Exports

| Kind                        | Name          | Declaration | Module             | Package |
| --------------------------- | ------------- | ----------- | ------------------ | ------- |
| `custom-element-definition` | `component-b` | ComponentB  | /src/ComponentB.js |         |

### `src/styles/component-b-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                               | Package |
| ---- | -------- | ----------- | ------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/component-b-styles.css.js |         |
