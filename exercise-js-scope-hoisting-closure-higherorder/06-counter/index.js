function counter () {
  var count = 1;

    return function(){
      return count ++;
    };
}

module.exports = counter;
