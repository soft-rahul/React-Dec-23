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