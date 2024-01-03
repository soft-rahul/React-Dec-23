# Difference between NPM & NPX

![Image](Screenshot%20(522).png)

NPM and NPX are both associated with the environment and make our work with Javascript packages easier. While NPM is used as a package manager, NPX, on the other hand, is used to execute Javascript packages. 

## What is NPM?
NPM stands for Node Package Manager. It is a Javascript package manager and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. , and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database. 

Isaac Z. Schlueter developed NPM purely in Javascript. It was first released in November 2010. Ever since, NPM has had a lot of updates and has improved in terms of efficiency, speed and security. 

## What is NPX?
NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.

<h6>
The primary use case of NPX  is when we need to use a particular package just once. In such cases, first installing it and then executing it becomes a very redundant task. This is why NPX is a powerful tool. 
</h6>

## What is a JavaScript module bundler?

A bundler is a **development tool** that combines many JavaScript code files into a single one that is **production-ready loadable** in the browser.


## What is the Difference Between dependencies and devDependencies

### Dependencies
Dependencies are packages that are required for your application to run properly. These packages are installed and loaded by default when you run your application. Dependencies are typically modules or libraries that provide the functionality to your application, such as UI frameworks, database connectors, or utility functions.

Dependencies are essential to the functionality of your application and should be included in your package.json file. When you run npm install or yarn install, all dependencies will be installed along with your project's other packages.

### DevDependencies
DevDependencies, on the other hand, are packages that are only required for development and testing purposes. These packages are not necessary for the functionality of your application and are not loaded when you run your application. DevDependencies typically include testing frameworks, build tools, and code quality checkers.

DevDependencies are not required for the end user of your application but are necessary for the development process. They should be installed separately from your dependencies using the --save-dev flag in npm or --dev flag in Yarn.

## Tree 🌳 Shaking or Dead 💀 Code Elimination

When we import and export modules in JavaScript, most of the time there is unused code floating around. Tree shaking or dead code elimination means that unused modules will not be included in the bundle during the build process.

It only works with import and export. It won’t work with CommonJS require syntax. Same applies to npm dependencies. great example is lodash, just import pick from ‘lodash/pick and your bundle will only include one small module instead of entire lodash library.

Utilizing the tree shaking and dead code elimination can significantly reduce the code size we have in our application. The less code we send over the wire the more performant the application will be.

## What is Gitignore

The .gitignore file is a text file that tells Git which files or folders to ignore in a project.

A local .gitignore file is usually placed in the root directory of a project. You can also create a global .gitignore file and any entries in that file will be ignored in all of your Git repositories.

To create a local .gitignore file, create a text file and name it .gitignore (remember to include the . at the beginning). Then edit this file as needed. Each new line should list an additional file or folder that you want Git to ignore.

The entries in this file can also follow a matching pattern.

* (*) is used as a wildcard match
* (/) is used to ignore pathnames relative to the .gitignore file
 * (#) is used to add comments to a .gitignore file