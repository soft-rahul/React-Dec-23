# JavaScript in JSX with Curly Braces

## Where to use curly braces 
You can only use curly braces in two ways inside JSX:

- As text directly inside a JSX tag:
  `<h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}>` will not.
  
- As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".