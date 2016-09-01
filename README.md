
# time-picker

A very simple time picker for React. It shows fields for hours and minutes, signals change (and is
set) through a `Date` object, and accepts up/down keys.

## Usage

```css
@import '@scienceai/time-picker';
```

```js
import TimePicker from '@scienceai/time-picker';
```

```xml
<TimePicker
  value={someDateState}
  onChange={this.handleTimeChange}
/>
```

## Properties

There is only one component — `TimePicker` — and it takes the following properties:

* `value`, Date. Use this to pass in a value if you are using `TimePicker` as a controlled
  component.
* `defaultValue`, Date. Provide a default value.
* `disabled`, boolean. Disables the picker.
* `onChange`, func. Receives a `Date` object whenever the value changes.

## CSS

The padding of the picker depends on the `--spacing-unit` (default: 8px) and `--spacing-medium`
(default: 16px) variables, and its `border-radius` depends on `--spacing-unit`. Its border colour
can be overridden with a `--middle-grey` variable (default: `#ebebeb`);
