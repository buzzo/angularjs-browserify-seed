# crud-js-boilerplate
My first experiment with Nodejs.

Goals:
- no grunt, gulp or builder = pure npm
- no requirejs or AMD = browserify
- after some research I choose the most used structural framework = angularjs
- modular and scalable project = features app folder. Each feature has it's own html/css/js
- project should be easy to code = watchify + browserify
 
TODO:
- research + add security (login, etc)
- add CRUD example
- move from css to sass
 
### Commands

```
npm install
npm run serve (development - open browser http://localhost:3000 and change the code)
npm run prod (build for production, output goes to 'public' folder)
npm run test-single-run (run unit test once and show coverage report)
npm run test (run unit test and keeps watching for changes. Great for development. No coverage report)
npm run protractor (e2e tests. Your server must be up and running before you run this command)
```