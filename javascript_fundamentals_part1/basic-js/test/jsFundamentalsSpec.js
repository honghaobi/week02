var expect = require("chai").expect; //jshint ignore:line
var methods = require("../script");

describe("#sum", function(){
  it("adds two numbers", function(){
    expect(methods.sum(1,2)).to.equal(3);
  });
  it("works with negative numbers", function(){
    expect(methods.sum(-1,2)).to.equal(1);
  });
});

describe("#isEqual", function(){
  it("compares numbers", function(){
    expect(methods.isEqual(1,2)).to.equal(false);
  });
  it("compares strings", function(){
    expect(methods.isEqual(-1,-1)).to.equal(true);
  });
  it("compares booleans", function(){
    expect(methods.isEqual(true,true)).to.equal(true);
  });
  it("compares type and equality (using ===)", function(){
    expect(methods.isEqual("1",1)).to.equal(false);
  });
});

describe("#isEven", function(){
  it("returns true if a number is even", function(){
    expect(methods.isEven(2)).to.equal(true);
  });
  it("returns false if a number is not even", function(){
    expect(methods.isEven(3)).to.equal(false);
  });
});

describe("#isDivisible", function(){
   it("returns true if a number is divisible by the second argument", function(){
    expect(methods.isDivisible(2,2)).to.equal(true);
  });
  it("returns false if a number is not divisible by the second argument", function(){
    expect(methods.isDivisible(3,2)).to.equal(false);
  });
});

describe("#discountPercentage", function(){
  it("returns the discount for an amount", function(){
    expect(methods.discountPercentage(100,5)).to.equal(5);
  });
  it("returns a warning if the percentage is below 0", function(){
    expect(methods.discountPercentage(3,-5)).to.equal("please enter a number between 0 and 100");
  });
  it("returns a warning if the percentage is above 100", function(){
    expect(methods.discountPercentage(3,102)).to.equal("please enter a number between 0 and 100");
  });
});

describe("#isVowel", function(){
  it("returns true if a letter is a vowel", function(){
    expect(methods.isVowel("a")).to.equal(true);
  });
  it("returns false if a letter is not a vowel", function(){
    expect(methods.isVowel("z")).to.equal(false);
  });
});

describe("#celsiusToFahrenheit", function(){
  it("returns Fahrenheit if its in Celsius", function(){
    expect(methods.celsiusToFahrenheit(true,55)).to.equal(131);
  });
  it("returns Celsius if its in Fahrenheit", function(){
    expect(methods.celsiusToFahrenheit(false,90)).to.equal(32);
  });
});

describe("#biggestOfThree", function(){
  it("returns biggest number of the three", function(){
    expect(methods.biggestOfThree(25,928,73)).to.equal(928);
  });
  it("returns biggest number of the three", function(){
    expect(methods.biggestOfThree(28,87333,9232)).to.equal(87333);
  });
});

// BONUS - write a test for the bonus question!

describe("#federalIncomeTaxCalculator", function(){
  it("returns how much you are paying tax", function(){
    expect(methods.federalIncomeTaxCalculator(86000)).to.equal("you are getting back $64500");
  });
  it("returns how much you are paying tax", function(){
    expect(methods.federalIncomeTaxCalculator(1000000)).to.equal("you are getting back $604000");
  });
});

describe("#letterCount", function(){
  it("returns the letter count", function(){
    expect(methods.letterCount("yomama")).to.deep.equal({ a: "||", m: "||", o: "|", y: "|" });
  });
  it("returns the letter count", function(){
    expect(methods.letterCount("banana")).to.deep.equal({ a: "|||", b: "|", n: "||"});
  });
});

describe("#letterCount", function(){
  it("returns the answer", function(){
    expect(methods.prefixNotation("*",9,3,3)).to.equal(81);
  });
  it("returns the answer", function(){
    expect(methods.prefixNotation("/",900,3,100)).to.equal(3);
  });
});
