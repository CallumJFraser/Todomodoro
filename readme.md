Todomodoro
===

Todo list client side react web application with pomodoro timer capabilities. This app is an extension of the [Simple Flux Todo](https://github.com/CallumJFraser/SimpleFluxTodo) project.

This application uses the following:

* Building
    * [Webpack](https://webpack.github.io/) - Combines the JS files in /src folder into one 'bundle' JS file.
    * [Babel](https://babeljs.io/) - Transpiles ES6 JS code into the more compatible ES5 standard.
* Client-side
    * [Bootstrap](https://getbootstrap.com/) - CSS grid and basic application styles
* Testing
	* [Mocha](https://mochajs.org/) - Testing framework.
	* [Chai](http://chaijs.com/) - BDD/TDD assertion library.
	* [Karma](https://karma-runner.github.io/) - Test runner for client side code.
	* [Rewire](https://github.com/jhnns/rewire) - Module that allows access to normally inacessible parts of another module.

Any feedback or improvements please give me a yell.

Setup
====

run `npm i` in command line/terminal to install node dependencies.

If you don't have it installed you will also need to run `npm i -g webpack` to install webpack globally.

Run
====

run `npm run build` to build the src/index.js file into the needed build/index.bundle.js file.

run `npm run watcher` to run the webpack package listener for local hosting.
