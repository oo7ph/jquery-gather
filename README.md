jquery-gather
=============

A simple jquery Plugin gathers all input values within the element called upon and returns an object mapping names to values.

## Usage

Select any dom element containing input fields, checkboxes, etc. and gather it.
Note elements to be gathered need the "name" property. Non-named fields will not be gathered. You can also force gather to ignore fileds by setting the "data-gather-ignore" property

```
$('form').gather();
```

## TODO:
* Improve documentation
* Provide Mocha unit tests

