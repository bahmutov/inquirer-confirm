var confirm = require('..');

confirm('are you ok?', 'extra')
  .then(function confirmed(info) {
    console.log('you are ok');
    console.assert(info === 'extra', 'extra info transmitted');
  }, function cancelled(info) {
    console.log('sorry to hear that');
    console.assert(info === 'extra', 'extra info transmitted to reject');
  });
