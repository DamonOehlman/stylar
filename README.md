# Stylar

Badass CSS Styling Helpers

## Usage

Get the current transform on an element

```js
console.log(stylar(targetElement, 'transform'));
```

Update the transform of an element:

```js
stylar(targetElement, 'transform', 'translate(50px, 100px)');
```

Get the current transform of an element using the `get` helper:

```js
stylar(targetElement).get('transform');
```

Set the current transform of the element using the `set` helper (chainable):

```js
stylar(targetElement)
    .set('transform', 'translate(50px, 100px)')
    .set('background-color', 'red');
```

__NOTE:__ You can also use the set forms to update multiple elements at once:

```js
stylar([element1, element2], 'transform', 'translate(50px, 100px)');
```