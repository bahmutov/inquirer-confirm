require = require('really-need');
require('lazy-ass');
var check = require('check-more-types');
var bddStdin = require('bdd-stdin');
var confirm = require('..');

describe('inquirer-confirm', function () {
  it('is is a function', function () {
    la(check.fn(confirm));
  });

  it('returns a promise, resolved on yes', function () {
    bddStdin('yes\n');

    return confirm('is this ok?')
      .catch(function () {
        la(false, 'invalid response, should be resolved on yes');
      });
  });

  it('rejected on no', function () {
    bddStdin('no\n');

    var rejected;
    return confirm('is this ok?')
      .then(function () {
        la(false, 'invalid response, should be rejected on no');
      }, function () {
        rejected = true;
      })
      .then(function () {
        la(rejected, 'response was never rejected');
      });
  });

});
