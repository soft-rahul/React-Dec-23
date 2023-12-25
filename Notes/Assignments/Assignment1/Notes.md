# async & defer attribute

![Image](images/Screenshot%20(480).png)
![Image](images/Screenshot%20(481).png)

Whenever a Browser loads a website or web app , it does two things

- Parsing of HTML
- Fetching scripts and executing them


### script tag without any attribute

So, if we add script tag in the head of html page, then It will block Html rendering

### That's why we always add script tag in the end of content


### script tag with async 

In this way, script fetching will happen asynchronously , but after fetching execution of script will block Html rendering.

### script tag with defer

This will never block html rendering because it will fetch script asynchronously and it executes script only after html rendering is done.

# React Vs ReactDOM
## History
So React and React-DOM both are developed by the same team and up until React V0.14 React-DOM was shipped inside React package.

## Difference
React: React is a javascript library, designed for building better user interfaces.

React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM