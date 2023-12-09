let fruits = ['Orange', 'strawberry', 'kiwi'];
console.log(fruits[2]);

let person = {
  name: 'Trevor Noah',
  age: 30,
  occupation: 'comedian'
};

console.log(person.name);

let isSunny = true;
let isWarm = false;

if (isSunny && isWarm) {
  console.log("It's a sunny and warm day.");
} else if (isSunny || isWarm) {
  console.log("It's either sunny or warm.");
} else {
  console.log("It's neither sunny nor warm.");
}

let fruits1 = ["apple", "banana", "orange", "grape"];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);
