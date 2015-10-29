# Gutr CSS

> Hackable gutters for your box model.

## Install

**Bower**

```sh
$ bower install gutr --save
```

## Usage

**Markup**

```html
<div class="row">
  <div class="col-md-12 gutr-pad-y1">
    gutr-pad y 1
          │  │ └── Width: 1em
          │  └──── Direction: y (top, bottom)
          └─────── Type: padding

    <div class="my-wrapper gutr-mar2">
      gutr-mar 2
            │  └── Width: 2em
            └───── Type: margin

            Direction: x,y (default)
    </div>

  </div>
</div>
```

**Settings**

Sass:

```scss
// Sass settings
$gutr-unit: 1 !default;
$gutr-limit: 6 !default;
$gutr-measure: 'em' !default;
$gutr-cords: ('x', 'y') !default;
```

## API
For more helper classes check out [gutr.css](dist/gutr.css) file.

## Contribution
If you would like to contribute [pull requests](https://github.com/joseluisq/gutr-css/pulls) and [issues](https://github.com/joseluisq/gutr-css/issues) will be welcome!
Feature requests are welcome. Please before sending some feature requests make sure provide as much detail and context as possible.

## History
Check out [releases changelog](https://github.com/joseluisq/gutr-css/releases).

## License
MIT license

© 2015 [José Luis Quintana](http://quintana.io)
