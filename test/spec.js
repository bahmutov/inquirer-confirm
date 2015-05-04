require('lazy-ass');
var check = require('check-more-types');
var confirm = require('..');

describe('inquirer-confirm', function () {
  it('is is a function', function () {
    la(check.fn(confirm));
  });
});
