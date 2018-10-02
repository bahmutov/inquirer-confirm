var ask = require('inquirer');

module.exports = function confirm(question, extra) {
  question = question || 'Are you sure?';

  return ask.prompt({
    name: 'confirm',
    type: 'confirm',
    message: question
  }).then(function (answers) {
    if (answers.confirm) {
      return Promise.resolve(extra);
    } else {
      return Promise.reject(extra);
    }
  });
};
