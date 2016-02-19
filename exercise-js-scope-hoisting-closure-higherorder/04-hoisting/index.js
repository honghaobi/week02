// Identify what is wrong with this function.
// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
// Fix the problem with this function
// Something is being hoisted

function getSecret (checkButts) {
  if (!secret) {
    var secret = 'no secret!';
  }
  var secret = 'butts';
  return secret;
}

module.exports = getSecret();
