# angularjs-browserify-seed

A seed project using AngularJS and Browserify.

### Goals

- builder = gulp
- no requirejs or AMD = browserify
- structural framework = angularjs
- modular and scalable project = features app folder. Each feature has it's own html/css/js
- project should be easy to code = watchify + browserify

### Commands

```
npm install
```
Install dependencies.


```
npm install -g gulp
```
Install gulp globally.


```
gulp dev
```
Compiles the source and outputs to 'build' folder. It opens the new browser and refreshs it on every code change.
It doesn't execute the tests.
It mocks the backend using angular-mocks (test/mock/main_mock.js)


```
gulp prod
```
Compiles the source and outputs to 'build' folder. Uglify is applied.
It doesn't execute the tests.

```
gulp test
```
Executes unit tests and e2e tests.
Creates coverage report.


```
npm run test 
```
Executes only unit test and holds the console while running constantly all tests when the code is changed.
Great for TDD development.
No coverage report.


```
npm run protractor
```
Before using this command run "npm install -g protractor" to install protractor
You must have your production code running somewhere else.
Executes only e2e tests.
No coverage report.

