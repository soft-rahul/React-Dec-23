# Destructuring assignment

The two most used data structures in JavaScript are Object and Array.

Objects allow us to create a single entity that stores data items by key.
Arrays allow us to gather data items into an ordered list.
Although, when we pass those to a function, it may need not be an object/array as a whole. It may need individual pieces.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

## Array Destructuring

![Alt text](image.png)

#### Tips

### Ignore elements using commas

<pre>
<code>
const fullName = ["Rahul", "Kumar", "Keshri"];

const [firstName, , lastName] = fullName;
console.log(firstName); // Rahul
console.log(lastName);  // Keshri

</code>
</pre>

![Alt text](image-1.png)


### Tip 2
![Alt text](image-2.png)


### Tip 3 ( Swap Values)
<pre>
<code>
let a = 10;
let b = 90;

[a,b] = [b,a];

console.log('A is', a); // 90
console.log('B is', b); // 10

</code>
</pre>
![Alt text](image-3.png)

### Tip 4
![Alt text](image-5.png)

### Tip 5
![Alt text](image-6.png)

## Object Destructuring

The destructuring assignment also works with object

![Alt text](image-7.png)

### Nested Destructuring
If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

![Alt text](image-8.png)