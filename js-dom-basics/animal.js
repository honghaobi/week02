var animal = {
  cat: "meow",
  dog: "woof",
  snake: "hiss",
  pig: "oink",
  tiger: "raawr"
};


var tr = document.createElement('tr');
var td = document.createElement('td');
var animalName = td.innerText;

for (var i = 0; i < 5; i++) {
  animalName = animal[i];
  console.log(animalName);

}
