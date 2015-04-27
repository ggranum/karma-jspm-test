Karma JSPM Test
===

This is a simple test to see if Gulp 4.0 can run karma-jspm tests. I have ES6 code being tested by ES6 Jasmine tests. Shouldn't this work?

I'm running on node 0.10.36 and npm 2.8.4.

Running with Gulp 4.0
---

1. Run `npm install`
1. Run `npm run unit`. We have to run Gulp 4.0 like this since most people have Gulp 3.x installed globally.
1. You should see Karma run, but it says 0 of 0 tests passed. There should be two tests.

Running with Gulp 3.x
--- 

1. Delete the node_modules gulp folder
1. Run `npm install gulp`
1. Run `gulp unit`. 
1. You should get the same issue as above.