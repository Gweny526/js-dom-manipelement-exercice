// 1
let myBody = document.body;
console.log(myBody);

// 2
let first = myBody.firstElementChild
console.log(first);

// 3
let last = myBody.lastElementChild
console.log(last);

// 4
let exo4 = document.getElementsByTagName('div')[0]
let divChildren = exo4.children
console.log(exo4);

// 5
let liAll = document.getElementsByTagName('li')[0];
let next = liAll.nextElementSibling
console.log(next);

// 6
let precedent = next.previousElementSibling
console.log(precedent);