// Your JS goes here

var body = document.getElementsByTagName('body');


function blackRed(){
  for (var i = 0; i < 63; i++) {
    var checkerbox = document.createElement('div');

    checkerbox.id = i;
    checkerbox.style.width = "11.1%";
    checkerbox.style.height = "100px";
    checkerbox.style.float = "left";
    checkerbox.style.backgroundColor = "black";
    if (checkerbox.id % 2 === 0) {
      checkerbox.style.backgroundColor = "red";
    }

    body[0].appendChild(checkerbox);
  }
}

// blackRed();

function randomColor(){
  for (var i = 0; i < 63; i++) {
    var checkerbox = document.createElement('div');
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    checkerbox.id = i;
    checkerbox.style.width = "11.1%";
    checkerbox.style.height = "100px";
    checkerbox.style.float = "left";
    checkerbox.style.backgroundColor = hue;

    body[0].appendChild(checkerbox);
  }
}

// randomColor();

function gradientColor(){
  for (var i = 0; i < 63; i++) {
    var checkerbox = document.createElement('div');
    var colorChange1 = 'rgb(' + (166) + ',' + (Math.floor(255-i*3)) + ',' + (0) + ')';
    var colorChange2 = 'rgb(' + (Math.floor(0+(i*4))) + ',' + (144) + ',' + (155) + ')';

    checkerbox.id = i;
    checkerbox.style.width = "11.1%";
    checkerbox.style.height = "100px";
    checkerbox.style.float = "left";
    checkerbox.style.backgroundColor = colorChange1;
    if (checkerbox.id % 2 === 0) {
      checkerbox.style.backgroundColor = colorChange2;
    }
    body[0].appendChild(checkerbox);
  }
}

// gradientColor();

var hue;
var checkerbox;

function flashingColor(){
  for (var i = 0; i < 63; i++) {
    checkerbox = document.createElement('div');
    hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    checkerbox.id = i;
    checkerbox.className = "box";
    checkerbox.style.width = "11.1%";
    checkerbox.style.height = "100px";
    checkerbox.style.float = "left";
    checkerbox.style.backgroundColor = hue;
    body[0].appendChild(checkerbox);
  }
}

var element;

function removeElementsByClass(){
    var elements = document.getElementsByClassName('box');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


setInterval(flashingColor, 2000);
setInterval(removeElementsByClass, 1999.99999);
