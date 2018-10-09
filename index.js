const ask = require('inquirer');

module.exports = function confirm(options, extra) {
  if (typeof options === 'string') {
    // old API format with
    // var confirm = require('inquirer-confirm');
    // confirm('are you ok?')
    options = {
      question: options,
      extra: extra
    }
  }
  const question = options.question || 'Are you sure?';

  return ask.prompt({
    name: 'confirm',
    type: 'confirm',
    message: question,
    default: options.default
  }).then(function (answers) {
    if (answers.confirm) {
      return Promise.resolve(options.extra);
    } else {
      return Promise.reject(options.extra);
    }
  });
};
