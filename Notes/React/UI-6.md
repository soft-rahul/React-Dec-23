# Rendering List 

## Array Methods for List

#### Array.prototype.map()
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

![Image](images/Screenshot%20(523).png)

#### Syntax
<pre>
<code>
map(callbackFn)
map(callbackFn, thisArg)
</code>
</pre>

#### Parameters
<code> callbackFn </code>
A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

<code>element  </code>
The current element being processed in the array.

 <code> index </code>
The index of the current element being processed in the array.

<code> array </code>
The array map() was called upon.

<code> this (optional) </code>
A value to use as this when executing callbackFn. See iterative methods.

#### Return value
A new array with each element being the result of the callback function.


#### Description

The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

![](images/Screenshot%20(524).png)
The map() method is generic. It only expects the this value to have a length property and integer-keyed properties.

<b>
Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.
</b>

### Using parseInt() with map() - Problem arguments


### Side-effectful mapping
The callback can have side effects.

<pre>
<code>
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45

</code>
</pre>
This is not recommended, because copying methods are best used with pure functions. In this case, we can choose to iterate the array twice.

<pre>
<code>
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);

</code>
</pre>
Sometimes this pattern goes to its extreme and the only useful thing that map() does is causing side effects.

<pre>
<code>
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

products.map((product) => {
  product.price = 100;
});
</code>
</pre>
As mentioned previously, this is an anti-pattern. If you don't use the return value of map(), use forEach() or a for...of loop instead.

<pre>
<code>
products.forEach((product) => {
  product.price = 100;
});
</code>
</pre>
Or, if you want to create a new array instead:

<pre>
<code>
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});

</code>
</pre>