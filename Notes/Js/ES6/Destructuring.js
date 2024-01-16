// const fullName = ["Rahul", "Kumar", "Keshri"];

// const [firstName, , lastName] = fullName;
// console.log(firstName);
// console.log(lastName);

// swap values
// let a = 10;
// let b = 90;

// [a,b] = [b,a];

// console.log('A is', a);
// console.log('B is', b);

const sum = (a, b, ...all) => {
  console.log(a, b, all);
};

sum(10, 20, 30, 40, 50, 60);

const nums = [1, 2, 3, 4];
const [n1, n2, ...all] = nums;

console.log(n1,n2,all);
