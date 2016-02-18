module.exports = {
  countChar: function(str,char){
    var count = 0;

      for(var i = 0; i < str.length; i++){
        if(char == str[i]){
          count += 1;
        }
      }
    return count;
  },

  range: function(a, b, step){
    var arr = [];

    if(step > 0){
      for(a; a <= b; a += step){
        arr.push(a);
      }
      return arr;
    } else {
      for(a; a >= b; a += step){
         arr.push(a);
      }
      return arr;
    }
  },

  sum: function(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i ++){
      sum += arr[i];
    }
   return sum;
  },
  reverseArray: function(arr){
    var newArray = arr.reverse();
    return newArray;
  },
  reverseInPlace: function(arr){
    var newArray = arr.reverse();
    return newArray;
  },
  isPalindrome: function(str){
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    if (removeChar == removeChar.split('').reverse().join('')){
      return true;
    } else {
      return false;
    }
  },
  isPrime: function(num){
    if( num === 1){
      return false;
    }
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  findLongestWord: function(arr){
    var answer = "";
    for (var i = 0; i < arr.length; i++) {
      if (answer.length < arr[i].length) {
          answer = arr[i];
      }
    }
    return answer;
  },
  filterLongWords: function(arr,num){
    var longWords= [];

    for (var i = 0; i < arr.length; i++){
      if(arr[i].length > num){
        longWords.push(arr[i]);
      }
    }
    return longWords;
  },
  createObject: function(k,v){
    var obj = {};
    obj[k] = v;
    return obj;
  },
  numberObject: function(k){
    var obj = {};
    var value = 0;
    for(var i = 0; i < k; i++){
      obj[i] = value;
      value = value + 5;
    }
    return obj;
  },
  reverseString: function(str){
   return str.split('').reverse().join('');
  },
  youngestPerson: function(people){
    youngPerson = {};
    var youngestAge = 1000;
    for(var i = 0; i < people.length; i++){
      if(people[i].age < youngestAge){
        youngestAge = people[i].age;
        youngPerson = people[i];
      }
    }
    return youngPerson.name;
  },
  keys: function(obj){
    return Object.keys(obj);
  }
};
