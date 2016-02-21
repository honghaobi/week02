var animal = {
  cat: "meow",
  dog: "woof",
  snake: "hiss",
  pig: "oink",
  tiger: "raawr"
};

var tb = document.getElementById('animalTable');
var row;
var animalName;
var animalSound;

for (var i = 0; i < 1; i++) {
  for (var key in animal) {
    row = tb.insertRow(i);
    animalName = row.insertCell(0);
    animalSound = row.insertCell(1);
    animalName.innerHTML = key;
    animalSound.innerHTML = animal[key];
  }
}
