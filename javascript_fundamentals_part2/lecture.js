var hash = "";
var j= 6;
for (var i = 0; i < j; i++) {
  console.log(hash += "#");
}

var hash = "";
var j= 30;
for (var i = 0; i < j; i++) {
  j=(j-1);
console.log(" ".repeat (j),"#".repeat (i*2+1));
}


var lockers = Array(101).fill(true);

for( var i = 1; i < 101; i ++ ){
   console.log("outside loop" + i);
  for( var j = 0; j < 101; j = i + j ){
   console.log("inside loop" + j);
    lockers[j] = !lockers[j];
  }
}

console.log(lockers);


var openLockers = [];

  for( var i = 1; i < 101; i ++){
    if (lockers[i]===false){
      openLockers.push(i);
    }
  }

console.log(openLockers);


var players = [
    {name: 'Bumgarner', number: '40', position: 'starting pitcher', salary: 6950000},
    {name: 'Posey', number: '28', position: 'catcher', salary: 17277777},
    {name: 'Belt', number: '9', position: 'first base', salary: 3600000},
    {name: 'Panik', number: '12', position: 'second base', salary: 522500},
    {name: 'Crawford', number: '35', position: 'shortstop', salary: 3175000},
    {name: 'Duffy', number: '5', position: 'third base', salary: 509000},
    {name: 'Aoki', number: '23', position: 'left field', salary: 4000000},
    {name: 'Pagan', number: '16', position: 'center field', salary: 10250000},
    {name: 'Pence', number: '8', position: 'right field', salary: 18500000},
];

console.log(players[2].number);
console.log(players[6].position);
console.log(players[1]);

var totalSal= 0;

for(var i = 0; i < players.length; i++) {
    console.log(players[i].salary);
    totalSal += players[i].salary;
}

console.log(totalSal);

// Optional Argument

function power(base, exponentS) {
  var exponent = exponentS || 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64
