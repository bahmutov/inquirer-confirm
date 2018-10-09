const la = require('lazy-ass')
var check = require('check-more-types')
var bddStdin = require('bdd-stdin')
var confirm = require('..')

describe('inquirer-confirm', function () {
  it('is is a function', function () {
    la(check.fn(confirm))
  })

  context('api 2.x', () => {
    it('passes extra value', () => {
      bddStdin('yes\n')
      return confirm({question: 'pass extra?', extra: 42}).then(value => {
        la(value === 42, 'expected extra value', value)
      })
    })

    it('default value is true', () => {
      bddStdin('\n') // note we don't actually enter anything
      return confirm({question: 'pass extra?', extra: 42}).then(value => {
        la(value === 42, 'expected extra value', value)
      })
    })

    it('default value is false', () => {
      bddStdin('\n') // note we don't actually enter anything
      return confirm({question: 'pass extra?', extra: 42, default: false})
        .then(() => {
          la(false, 'should have picked default answer false')
        }, (value) => {
          la(value === 42, 'expected extra value on default answer false', value)
        })
    })
  })

  context('api 1.x', () => {
    it('returns a promise, resolved on yes', function () {
      bddStdin('yes\n')

      return confirm('is this ok?').catch(function () {
        la(false, 'invalid response, should be resolved on yes')
      })
    })

    it('passes extra value', () => {
      bddStdin('yes\n')
      return confirm('pass extra?', 42).then(value => {
        la(value === 42, 'expected extra value', value)
      })
    })

    it('rejected on no', function () {
      bddStdin('no\n')

      var rejected
      return confirm('is this ok?')
        .then(
          function () {
            la(false, 'invalid response, should be rejected on no')
          },
          function () {
            rejected = true
          }
        )
        .then(function () {
          la(rejected, 'response was never rejected')
        })
    })
  })
})
