# crud-js-boilerplate
My first experiment with Nodejs.

Goals:
- no grunt, gulp or builder = pure npm
- no requirejs or AMD = browserify
- after some research I choose the most used structural framework = angularjs
- modular and scalable project = features app folder. Each feature has it's own html/css/js
- project should be easy to code = watchify + browserify
 
TODO:
- add tests
- add production build lifecycle
- add CRUD example
- add fancy css
- research + add security (login, etc)
 
### Commands

```
npm install
npm run serve (development - open browser http://localhost:3000 and change the code)
npm run build (build to public folder)
npm run test-single-run (run unit test once and show coverage report)
npm run test (run unit test and keeps watching for changes. Great for development. No coverage report.)
```