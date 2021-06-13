<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Round

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Round a complex number to the nearest integer.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cround
```

</section>

<section class="usage">

## Usage

```javascript
var cround = require( '@stdlib/math-base-special-cround' );
```

#### cround( \[out,] re, im )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` to the nearest integer.

```javascript
var v = cround( -4.2, 5.5 );
// returns [ -4.0, 6.0 ]

v = cround( 9.99999, 0.1 );
// returns [ 10.0, 0.0 ]

v = cround( 0.0, 0.0 );
// returns [ 0.0, 0.0 ]

v = cround( NaN, NaN );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = cround( out, -4.2, 5.5 );
// returns <Float64Array>[ -4.0, 6.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var randu = require( '@stdlib/random-base-randu' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cround = require( '@stdlib/math-base-special-cround' );

var re;
var im;
var z;
var o;
var w;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cround( real(z), imag(z) );
    w = new Complex128( o[ 0 ], o[ 1 ] );
    console.log( 'round(%s) = %s', z.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cround.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cround

[test-image]: https://github.com/stdlib-js/math-base-special-cround/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-cround/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cround/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cround?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cround
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cround/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cround/main/LICENSE

</section>

<!-- /.links -->
