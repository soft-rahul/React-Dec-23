# useEffect
Certain components in React need to interact with things outside themselves. These things can be anything from querying data from a server to finding/changing the position of the component on the webpage or even sending some data to a server when necessary. This interaction with the outside world is called a **side-effect.**

![Alt text](image.png)


## Lifecycle of Reactive Effects

* Effects have a different lifecycle from components
* Components may mount, update, or unmount. An Effect can only do two things: to start synchronizing something, and later to stop synchronizing it. 