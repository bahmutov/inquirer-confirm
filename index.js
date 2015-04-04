var ask = require('inquirer');
var Promise = require('bluebird');

module.exports = function confirm(question) {
  question = question || 'Are you sure?';

  return new Promise(function (resolve, reject) {

    ask.prompt({
      name: 'confirm',
      type: 'confirm',
      message: question
    }, function (answers) {
      if (answers.confirm) {
        return resolve();
      } else {
        return reject();
      }
    });

  });
};
