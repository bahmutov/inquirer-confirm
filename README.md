# inquirer-confirm

> Simple confirm yes/no question for CLI node applications.
> Returns a promise; built on top of inquirer

[![NPM][inquirer-confirm-icon]][inquirer-confirm-url]

[![Build status][ci-image]][ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][inquirer-confirm-devdependencies-image] ][inquirer-confirm-devdependencies-url]
[![renovate-app badge][renovate-badge]][renovate-app]

`npm install inquirer-confirm --save`

## v2.x

```js
const confirm = require('inquirer-confirm')
confirm({
  question: 'pass extra?', // 'Are you sure?' is default
  extra: 42, // undefined is default
  default: false // true (yes) is default
}).then(confirmed, cancelled)
```

Whatever is `extra` is passed to both confirmed and to cancelled callbacks.

## v1.x

```js
var confirm = require('inquirer-confirm');
confirm('are you ok?')
  .then(function confirmed() {
    console.log('you are ok');
  }, function cancelled() {
    console.log('sorry to hear that');
  });
```

runtime

```
$ node test.js
? are you ok? Yes
you are ok
$ node test.js
? are you ok? No
sorry to hear that
```

For full CLI prompt support see the original [inquirer](https://www.npmjs.com/package/inquirer)

### Passing extra info

If you need to pass through an additional argument, you can. Same argument is
passed to both resolve and reject paths.

```js
confirm('are you ok?', 'really')
  .then(function confirmed(a) {
    console.log(a); // prints "really"
  }, function cancelled(b) {
    console.log(b);  // prints "really"
  });
```

Related: [confirm-click](https://github.com/bahmutov/confirm-click),
[get-username-and-password](https://github.com/bahmutov/get-username-and-password)

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/inquirer-confirm/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[inquirer-confirm-icon]: https://nodei.co/npm/inquirer-confirm.svg?downloads=true
[inquirer-confirm-url]: https://npmjs.org/package/inquirer-confirm

[ci-image]: https://travis-ci.org/bahmutov/inquirer-confirm.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/inquirer-confirm
[dependencies-image]: https://david-dm.org/bahmutov/inquirer-confirm.svg
[dependencies-url]: https://david-dm.org/bahmutov/inquirer-confirm
[inquirer-confirm-devdependencies-image]: https://david-dm.org/bahmutov/inquirer-confirm/dev-status.svg
[inquirer-confirm-devdependencies-url]: https://david-dm.org/bahmutov/inquirer-confirm#info=devDependencies
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
