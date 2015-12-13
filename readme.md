# Gutr CSS

> Hackable gutters for your box model.

[![Bower](https://img.shields.io/bower/v/gutr.svg?style=flat-square)](https://github.com/quintana-dev/gutr-css) [![devDependency Status](https://david-dm.org/quintana-dev/gutr-css/dev-status.svg?style=flat-square)](https://david-dm.org/quintana-dev/gutr-css#info=devDependencies)

## Install

**Bower**

```sh
$ bower install gutr --save
```

## Usage

**Markup**

```html
<div class="row">
  <div class="col-md-12 pad-y1">
    pad y 1
      │ │ └── Width: 1em
      │ └──── Direction: y (top and bottom)
      └────── Type: padding

    <div class="my-wrapper mar2">
      mar 2
        │ └── Width: 2em
        └──── Type: margin
              Direction: x and y (by default)
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

## Contributions
If you would like to contribute [pull requests](https://github.com/quintana-dev/gutr-css/pulls) and [issues](https://github.com/quintana-dev/gutr-css/issues) will be welcome! Feature requests are welcome. Please before sending some feature requests make sure provide as much detail and context as possible.

## History
Check out [releases changelog](https://github.com/quintana-dev/gutr-css/releases).

## License
MIT license

© 2015 [José Luis Quintana](http://quintana.io)
