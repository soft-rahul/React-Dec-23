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

// const sum = (a, b, ...all) => {
//   console.log(a, b, all);
// };

// sum(10, 20, 30, 40, 50, 60);

// const nums = [1, 2, 3, 4];
// const [n1, n2, ...all] = nums;

// console.log(n1,n2,all);

// object destructuring
// const userInfo = {
//   name: "RK",
//   age: 25,
// };

// const {
//   age: userAge,
//   name: userName,
//   gender: userGender = "Secret",
// } = userInfo;

// console.log(userAge, userName, userGender);

//...rest in object
// const book = {
//   name: "Book One",
//   author: "Someone",
//   pages: 1000,
//   isRead: false,
// };

// let {name, ...otherBookDetails} = book;
// name = 'something else';
// console.log(name, otherBookDetails);

let one, two, three;
const numbers = {
  one: 1,
  two: 2,
  three: 3,
};
({ one, two, three } = { one: 1, two: 2, three: 3 });
