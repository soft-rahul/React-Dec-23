# Rendering List 

## Array Methods for List

### Array.prototype.map()
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


### Array.prototype.filter()
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

![](images/Screenshot%20(526).png)

#### Syntax
<pre>
<code>
filter(callbackFn)
filter(callbackFn, thisArg)
</code>
</pre>

#### Parameters
<code> callbackFn </code>
A function to execute for each element in the array. It should return a <b> truthy value </b> to keep the element in the resulting array, and a <b> falsy value </b> otherwise. The function is called with the following arguments:

<code>element  </code>
The current element being processed in the array.

 <code> index </code>
The index of the current element being processed in the array.

<code> array </code>
The array filter() was called upon.

<code> this (optional) </code>
A value to use as this when executing callbackFn. 

#### Return value
A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.


### Array.prototype.reduce()
The reduce() method of Array instances executes a user-supplied <b>"reducer" </b>callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).


#### Syntax
<pre>
<code>
reduce(callbackFn)
reduce(callbackFn, initialValue)
</code>
</pre>

#### Parameters
<code> callbackFn </code>
A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

<code>accumulator  </code>
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

 <code> current Value </code>
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

<code> current Index </code>
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.
<code> array </code>
The array reduce() was called upon.

<code> initialValue </code>
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown..

#### Return value
The value that results from running the "reducer" callback function to completion over the entire array.


## Rendering List
### Keeping list items in order with key

You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:
<pre>
<code> < li key={person.id}>...</> </code>
</pre>

![](images/Screenshot%20(529).png)


### Where to get your key 
Different sources of data provide different sources of keys:

* Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
* Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.


### Rules of keys 
* Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
* Keys must not change or that defeats their purpose! Don’t generate them while rendering.


<code>

You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.

Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: < Profile key={id} userId={id} />.

</code>