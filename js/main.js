function loop() {
  for (let i = 1; i <= 7; i++) {
    const result = new Array(i).fill('#').join('');
    console.log(result);
  }
}
// 
function min1(a, b) {
  return Math.min(a, b);
}
// 
function min2(arr) {
  return Math.min(...arr);
}
// 
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.created = new Date();
  }
}

const animal = new Animal('Rex');
const dog = new Dog('Muhtar');

// 

function api1() {
  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(res => console.log(res))
}
// 
async function api2() {
  const response = await fetch('https://api.ipify.org?format=json')
  const json = await response.json();

  console.log(json);
}
// 
window.loop = loop;
window.min1 = min1;
window.min2 = min2;