var ask = require('inquirer');

module.exports = function confirm(question, extra) {
  question = question || 'Are you sure?';

  ask.prompt({
    name: 'confirm',
    type: 'confirm',
    message: question
  }, function (answers) {
    if (answers.confirm) {
      return Promise.resolve(extra);
    } else {
      return Promise.reject(extra);
    }
  });
};
