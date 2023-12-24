# Conditional Rendering

We can use these things for conditionally rendering things
- if / else
- && 
- ?:
- Optional Chaining (not for conditional rendering)

## Conditionally returning nothing with null

In practice, returning null from a component isn’t common because it might surprise a developer trying to render it


## Don’t put numbers on the left side of &&.

To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.


## Logical operators Revision
<p> There are four logical operators in js</p>
- <code> || </code> (OR) <br/>
- <code> && </code> (AND) <br/>
- <code> ! </code> (NOT)<br/>
- <code> ?? </code> (Nullish operator)

### <code> || </code> (OR) 

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

#### OR "||" finds the first truthy value

The extended algorithm works as follows.

Given multiple OR’ed values:

<code> result = value1 || value2 || value3; </code>

The OR || operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were false), returns the last operand.

A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.


##### This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.

### Getting the first truthy value from a list of variables or expressions.

For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):
<code>
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
</code>
If all variables were falsy, "Anonymous" would show up.

### Short-circuit evaluation.

Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:
<code>
true || alert("not printed");
false || alert("printed");
</code>
In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

### <code> && </code> (AND)

In classical programming, AND returns true if both operands are truthy and false otherwise:

<pre>
<code>
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
</code>
</pre>

### AND “&&” finds the first falsy value

Given multiple AND’ed values:
<pre>
<code>
result = value1 && value2 && value3;
</code>
</pre>

The AND && operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were truthy), returns the last operand.
  
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.


### Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

<code>

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
</code>


## <code> ! </code> (NOT)

The boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:
<pre><code>
result = !value;
</code> </pre>

The operator accepts a <b> single argument </b> and does the following:

- Converts the operand to boolean type: true/false.
- Returns the inverse value.

#### A double NOT !! is sometimes used for converting a value to boolean type

### The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.


### <code> ?? </code> (Nullish Operator)

The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.
In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.


## Comparison with <code> || (OR) </code>

The important difference between them is that:

- || returns the first truthy value.
- ?? returns the first defined value.
  
In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

For example, consider this:
<pre>
<code>
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
</code>
</pre>

The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
so the result of || is the second argument, 100.
The height ?? 100 checks height for being null/undefined, and it’s not,
so the result is height “as is”, that is 0.
In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.


#### The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.

That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.