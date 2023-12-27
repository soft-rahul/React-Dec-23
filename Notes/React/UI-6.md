# Rendering List

You will often want to display multiple similar components from a collection of data. You can use the JavaScript array methods to manipulate an array of data.

Here’s a short example of how to generate a list of items from an array:

Move the data into an array:

<pre>
<code>
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
</code>
</pre>

Map the people members into a new array of JSX nodes, listItems:

<pre>
<code>
const listItems = people.map(person => <li>{person}</li>);
</code>
</pre>

Return listItems from your component wrapped in a 
<pre>
<code>


return <ul>{listItems}</ul>;
</code>
</pre>
