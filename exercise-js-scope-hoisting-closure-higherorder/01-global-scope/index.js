//Without modifying the function runner or module.exports
// get it to return "outer"

function runner () {
  return outer;
}

var outer= "outer";

runner();

module.exports = runner;
