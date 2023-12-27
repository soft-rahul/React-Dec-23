# Keeping Components Pure

Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows.

## Pure functions 
* Same Input , Same Output
* No sideEffect.

In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

* It minds its own business. It does not change any objects or variables that existed before it was called.
* Same inputs, same output. Given the same inputs, a pure function should always return the same result.