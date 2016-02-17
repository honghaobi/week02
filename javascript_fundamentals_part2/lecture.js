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
