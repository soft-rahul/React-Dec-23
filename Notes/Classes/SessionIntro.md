1). NPM
It's a Package Manager tool but doesn't stand for Node Package Manager.

Init NPM -- Package.json
Package.json file is a configuration file for NPM

2). Bundler - Parcel
    types of dependancies in npm file?

    Difference between ^ and ~ in Package.json file

    ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

    ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

3). Difference between Package.json Vs Package-lock.json
    Package lock file contain info about each and every dependancies
    each dependency's exact version, hash number and other details

4). Transitive dependency or Dependency Tree

5). NPX Parcel index.html
    When we want to execute NPM package with or without installing it 
    then we use NPX 

6). Browser scripts cannot have import and export statements

7). Functions of Bundler - Parcel
    - Dev build
    - Local Server
    - HMR -> Hot Module Replacement
    Hot Module Replacement (HMR) is a feature in web bundlers that allows developers to update modules in a running application without reloading the page. 
    - File Watching Algo 
    - Caching
    - Image optimization
    - Compression
    - Bundling
    - Consistent Hashing?
    - code splitting
    - Differential bundling - supporting old Browsers
    - Error Handling
    - Https
    - Tree Shaking - remove unused code
    - Different build for dev and prod
    `
        npx parcel build index.html
        will get an error -> remove main property for package.json
    `

8). what is browserlist in package.json?
    Add Your target Browser list here.