// Create a higher order function that
// returns a new list after executing the predicate
// on each item of an array.
// You cannot use the built-in Array.map function

function map (array, predicate) {
  var result = [];

    for (var i = 0; i < array.length; i++) {
      result.push(predicate(array[i]));
    }
  return result;

}

module.exports = map;
