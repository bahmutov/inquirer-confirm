var confirm = require('..');

confirm('are you ok?')
  .then(function confirmed() {
    console.log('you are ok');
  }, function cancelled() {
    console.log('sorry to hear that');
  });
