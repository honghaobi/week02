module.exports = {
  sum: function(a,b){
    return a+b;
  },

  isEqual: function(arg1,arg2){
    if (arg1 === arg2){
      return true;
    } else {
      return false;
    }
  },

  isEven: function(num){
    if (num % 2 === 0){
      return true;
    } else {
      return false;
    }
  },

  isDivisible: function(num1, num2){
    if (num1 % num2 === 0){
      return true;
    } else {
      return false;
    }
  },

  discountPercentage: function(total, discount){
    if (discount > 100 || discount < 0){
      return "please enter a number between 0 and 100";
    } else {
      return total*(discount/100);
    }
  },

  isVowel: function(letter){
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
      return true;
    } else {
      return false;
    }
  },

  celsiusToFahrenheit: function(c2f, temp){
    if (c2f){
      return Math.floor((temp * 1.8) + 32);
    } else {
      return Math.floor((temp - 32) * (5/9));
    }
  },

  biggestOfThree: function(a,b,c){
    var array = [a, b, c];
    var big = 0;
    array.reduce(function(pre, cur){
      if(cur > pre) {
        big = cur;
      }
    });
    return big;
  },
  // Bonus
  federalIncomeTaxCalculator: function(income){
    if (income >= 1 && income <= 9225 ){
      return "you are paying $" + (income - (income * 0.1)) + " in tax";
    } else if (income >= 9226 && income <= 37450){
      return "you are paying $" + (income - (income * 0.15)) + " in tax";
    } else if (income >= 37451 && income <= 90750){
      return "you are paying $" + (income - (income * 0.25)) + " in tax";
    } else if (income >= 90751 && income <= 189300){
      return "you are paying $" + (income - (income * 0.28)) + " in tax";
    } else if (income >= 189301 && income <= 411500){
      return "you are paying $" + (income - (income * 0.33)) + " in tax";
    } else if (income >= 411501 && income <= 413200){
      return "you are paying $" + (income - (income * 0.15)) + " in tax";
    } else if (income >= 413200){
      return "you are paying $" + (income - (income * 0.396)) + " in tax";
    }
  },



  prefixNotation: function(operator, num1, num2, num3){

  return eval((num1 + operator + num2 + operator + num3).toString());

  }


};
