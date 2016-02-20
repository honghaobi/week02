var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

var main = document.querySelector('#main');
console.log(main);

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

document.getElementById('main').style.backgroundColor = "goldenrod";

// document.getElementsByClassName('odd').style = "color","red";

var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

getSingleElement.appendChild(li);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend an item";
console.log(anotherListElement);

getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);
