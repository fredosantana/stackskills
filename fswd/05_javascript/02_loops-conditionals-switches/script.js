/*

for(i = 0; i <= 10; i++) {
  console.log(i);
};

var i = 0;
while(i < 10) {
  console.log(i);
  i++;
};

var people = ["Jim", "James", "Paul", "Tyrone"];

for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
}

var acorn_dr = [
  {
    name: 'Wil',
    age: 37
  },
  {
    name: 'Wayne',
    age: 53
  },
  {
    name: 'Lucas',
    age: 'FOREVER!!!'
  }
];

var output = ' ';

for (var i = 0; i < acorn_dr.length; i++) {
  document.getElementById('booger_lips').innerHTML += '<li>'+acorn_dr[i].name+' - '+acorn_dr[i].age+'</li>';
}

var x = 20;
var y = 25;
var z = 10;
if (x < y && z == 10) {
  console.log(x + ' is less than ' + y + ' and z is 10.');
}
else if(x > y) {
  console.log(x + ' is more than ' + y);
}
else {
  console.log(x + ' is equal to ' + y);
};

*/

var name = 'Lucas';
switch(name) {
  case 'Wil':
    alert('My name is Wil.');
    break;
  case 'Wayne':
    alert('My name is Wayne.');
    break;
  case 'Lucas':
    alert('BARK!');
    break;
  default:
    alert('That person and/or dog doesn\'t live in Acorn Drive.')
}
