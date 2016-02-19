// Without touching module.exports or hackSecret,
// Can you think of a way to hide your secret?
// Make sure that the secret remains "butts"
// and checkSecret checks against "secret"
var secret;

function checkSecret () {
  var secret = 'butts';
  if (secret === 'butts') {
    return true;
  } else {
    return false;
  }
}


function hackSecret () {
  console.log(secret);
  if (secret === 'butts') {
    return 'hacked';
  } else {
    return 'not hacked';
  }
}



module.exports = {
  checkSecret: checkSecret,
  hackSecret: hackSecret,
};
